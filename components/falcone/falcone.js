// React
import { useState, useEffect } from "react";

// Axios
import axios from "axios";

// Next
import Image from "next/image";
import { useRouter } from "next/router";

// Components
import Dropdown from "../dropdown/dropdown";
import { toast } from "react-toastify";

// Configs
import {
  getPlanets,
  getVehicles,
  getToken,
  findFalcone,
} from "../../actions/falcone";
import {
  selectedStructure,
  getPlanetImagePath,
  getVehiclesImagePath,
} from "../../configs/constants";

const Falcone = () => {
  const router = useRouter();
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [selectedPlanets, setSelectedPlanets] = useState(selectedStructure);
  const [selectedVehicles, setSelectedVehicles] = useState(selectedStructure);
  const [timeTaken, setTimeTaken] = useState(0);

  // useEffect triggers after initial load to fetch the details
  useEffect(() => {
    // Fetching Planets
    try {
      const fetchPlanets = async () => {
        const { data: planets } = await axios(getPlanets());
        toast.success("Successfully retrived planets!");
        setPlanets(
          planets.map((planet) => {
            return {
              ...planet,
              selected: false,
            };
          })
        );
      };
      fetchPlanets();
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch the planets, please try again!");
    }
    // Fetching Vehicles
    try {
      const fetchVehicles = async () => {
        let vehicles = {};
        const { data } = await axios(getVehicles());
        toast.success("Successfully retrived vehicles!");
        data.forEach((vehicle, index) => {
          vehicles = {
            ...vehicles,
            [`${vehicle.name}`]: {
              ...vehicle,
              selected_count: 0,
            },
          };
        });
        // Updating the state
        setVehicles(vehicles);
      };
      fetchVehicles();
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch the vehicles, please try again!");
    }
  }, []);

  // useEffect triggers to compute and return the time taken
  useEffect(() => {
    let time = 0;
    for (const property in selectedPlanets) {
      if (selectedPlanets[property] && selectedVehicles[property]) {
        time +=
          selectedPlanets[property].distance /
          vehicles[`${selectedVehicles[property]}`].speed;
      }
    }
    setTimeTaken(time || 0);
  }, [selectedPlanets, selectedVehicles, vehicles]);

  // handles the dropdown selects and updates the selected planet, vehicles
  const onSelect = (type, value) => {
    let updatedPlanets = [];
    let data = {
      ...selectedPlanets,
      [type]: value,
    };
    // Triggers when the values are selected in the dropdown
    planets.forEach((planet) => {
      if (planet.name === value.name) {
        return updatedPlanets.push({
          ...planet,
          selected: true,
        });
      }
      updatedPlanets.push(planet);
    });
    // Triggers when selected value is removed from the dropdowns
    if (Object.keys(value).length === 0) {
      let validation = Object.values(data).map((item) => {
        return item.name;
      });
      updatedPlanets.forEach((planet, index) => {
        if (!validation.includes(planet.name)) {
          updatedPlanets[index] = {
            ...updatedPlanets[index],
            selected: false,
          };
        }
      });
      let copyOfVehicles = { ...vehicles };
      if (copyOfVehicles[`${selectedVehicles[type]}`]) {
        copyOfVehicles[`${selectedVehicles[type]}`] = {
          ...copyOfVehicles[`${selectedVehicles[type]}`],
          selected_count:
            copyOfVehicles[`${selectedVehicles[type]}`].selected_count - 1,
        };
      }
      setVehicles(copyOfVehicles);
      setSelectedVehicles({
        ...selectedVehicles,
        [`${type}`]: "",
      });
    }
    // Updating the state
    setPlanets(updatedPlanets);
    setSelectedPlanets(data);
  };

  // handles the Radio selects and updates the selected vehicles
  const onRadioSelect = (type, vehicle) => {
    let data = {
      ...selectedVehicles,
      [type]: vehicle.name,
    };
    let copyOfVehicles = { ...vehicles };
    copyOfVehicles[vehicle.name] = {
      ...copyOfVehicles[vehicle.name],
      selected_count: copyOfVehicles[vehicle.name].selected_count + 1,
    };
    for (const property in copyOfVehicles) {
      copyOfVehicles[property].selected_count = Object.values(data).filter(
        (item) => item === property
      ).length;
    }
    // Updating the state
    setSelectedVehicles(data);
    setVehicles(copyOfVehicles);
  };

  // handles the find falcone API calls and redirects to new page
  const triggerFindFalcone = async () => {
    const vehicle_names = Object.values(selectedVehicles);
    const planet_names = Object.values(selectedPlanets).map(
      (item) => item.name
    );
    console.log(vehicle_names, planet_names);
    // validating if all the planets and vehicles are selected or not
    if (planet_names.includes("") && vehicle_names.includes(undefined)) {
      return toast.error("Please select all the Planets and Vehicles");
    }
    try {
      const {
        data: { token },
      } = await axios(getToken());
      const {
        data: { status, planet_name },
      } = await axios(
        findFalcone({
          token,
          planet_names,
          vehicle_names,
        })
      );
      if (status === "success") {
        sessionStorage.setItem("planet_name", planet_name);
        sessionStorage.setItem("time", timeTaken);
        toast.success(`Found falcone on ${planet_name}`);
        return router.push("/result");
      }
      toast.error(
        "Failed to find falcon, please try again with different planets and vehicles."
      );
    } catch (error) {
      console.error(error);
      toast.error("Failed to find falcon, please try again later.");
    }
  };

  // Returns JSX for radio buttons
  const getRadioOptions = (classname) => {
    return (
      <div className="app__falcone__contents__card__dropdown__c">
        {Object.values(vehicles).map((vehicle) => {
          return (
            <div key={`${vehicle.name}-${classname}`} className="app__falcone__contents__card__dropdown__c__radio">
              <input
                className="app__falcone__contents__card__dropdown__c__radio__input"
                type="radio"
                id={vehicle.name}
                name={classname}
                value={vehicle.name}
                disabled={
                  vehicle.name !== selectedVehicles[classname] &&
                  (vehicle.total_no - vehicle.selected_count === 0 ||
                    selectedPlanets[classname].distance > vehicle.max_distance)
                }
                onClick={() => onRadioSelect(classname, vehicle)}
              />
              <label
                className="app__falcone__contents__card__dropdown__c__radio__label"
                htmlFor={vehicle.name}
              >
                {vehicle.name}
                <span className="app__falcone__contents__card__dropdown__c__radio__label__margin">
                  ({vehicle.total_no - vehicle.selected_count})
                </span>
                <Image
                  alt="Vehicle Icon"
                  src={getVehiclesImagePath[`${vehicle.name}`]}
                  width={32}
                  height={32}
                />
              </label>
            </div>
          );
        })}
      </div>
    );
  };

  // returns the final JSX for falcone.js
  return (
    <div className="app__falcone">
      <div className="app__falcone__header">
        <div className="app__falcone__header__contents">
          <h4>Select any four planets and vehicles you want to search below</h4>
          <p>Total time to reach all the planets : {timeTaken}</p>
        </div>
        <div className="app__falcone__header__button">
          <button onClick={() => router.reload()}>Reset</button>
          <button onClick={() => triggerFindFalcone()}>Find Falcone</button>
        </div>
      </div>
      <div className="app__falcone__contents">
        <div className="app__falcone__contents__card">
          <div className="app__falcone__contents__card__dropdown">
            <Dropdown
              classname="first"
              options={planets}
              selectedValue={selectedPlanets.first}
              onSelect={onSelect}
            />
            {selectedPlanets.first?.name ? getRadioOptions("first") : ""}
            {selectedPlanets.first?.distance ? (
              <div className="app__falcone__contents__card__dropdown__distance">
                Distance of Selected Planet:{" "}
                {selectedPlanets.first?.distance || ""}
              </div>
            ) : (
              ""
            )}
          </div>
          <Image
            alt="Planet Icon"
            className="app__falcone__contents__card__img"
            src={
              selectedPlanets.first?.name
                ? getPlanetImagePath[selectedPlanets.first.name]
                : getPlanetImagePath["Default"]
            }
            width={280}
            height={280}
          />
        </div>
        <div className="app__falcone__contents__card">
          <div className="app__falcone__contents__card__dropdown">
            <Dropdown
              classname="second"
              options={planets}
              selectedValue={selectedPlanets.second}
              onSelect={onSelect}
            />
            {selectedPlanets.second?.name ? getRadioOptions("second") : ""}
            {selectedPlanets.second?.distance ? (
              <div className="app__falcone__contents__card__dropdown__distance">
                Distance of Selected Planet:{" "}
                {selectedPlanets.second?.distance || ""}
              </div>
            ) : (
              ""
            )}
          </div>
          <Image
            alt="Planet Icon"
            src={
              selectedPlanets.second?.name
                ? getPlanetImagePath[selectedPlanets.second.name]
                : getPlanetImagePath["Default"]
            }
            width={280}
            height={280}
          />
        </div>
        <div className="app__falcone__contents__card">
          <div className="app__falcone__contents__card__dropdown">
            <Dropdown
              classname="third"
              options={planets}
              selectedValue={selectedPlanets.third}
              onSelect={onSelect}
            />
            {selectedPlanets.third?.name ? getRadioOptions("third") : ""}
            {selectedPlanets.third?.distance ? (
              <div className="app__falcone__contents__card__dropdown__distance">
                Distance of Selected Planet:{" "}
                {selectedPlanets.third?.distance || ""}
              </div>
            ) : (
              ""
            )}
          </div>
          <Image
            alt="Planet Icon"
            src={
              selectedPlanets.third?.name
                ? getPlanetImagePath[selectedPlanets.third.name]
                : getPlanetImagePath["Default"]
            }
            width={280}
            height={280}
          />
        </div>
        <div className="app__falcone__contents__card">
          <div className="app__falcone__contents__card__dropdown">
            <Dropdown
              classname="fourth"
              options={planets}
              selectedValue={selectedPlanets.fourth}
              onSelect={onSelect}
            />
            {selectedPlanets.fourth?.name ? getRadioOptions("fourth") : ""}
            {selectedPlanets.fourth?.distance ? (
              <div className="app__falcone__contents__card__dropdown__distance">
                Distance of Selected Planet:{" "}
                {selectedPlanets.fourth?.distance || ""}
              </div>
            ) : (
              ""
            )}
          </div>
          <Image
            alt="Planet Icon"
            src={
              selectedPlanets.fourth?.name
                ? getPlanetImagePath[selectedPlanets.fourth.name]
                : getPlanetImagePath["Default"]
            }
            width={280}
            height={280}
          />
        </div>
      </div>
    </div>
  );
};

export default Falcone;
