import { SketchPicker } from "react-color";
import styles from "./Form.module.css";
import { useState } from "react";
import { createPet } from "../services/petApi";

const Form = () => {
  const [hexColor, setHexColor] = useState("#000000");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [selectedType, setSelectedType] = useState("Dog");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleColorChange = (color) => {
    setHexColor(color);
  };

  const resetFormValues = () => {
    setName("");
    setAge(0);
    setError("");
  };

  const nameValidation = () => {
    if (name.length > 25) {
      setError("The maximum length of the name is 25 characters");
    } else if (name.length == 0) {
      setError("The name cannot be empty");
    }
  };

  const handleSubmitForm = async (e) => {
    setError("");

    e.preventDefault();

    nameValidation();

    if (!error) {
      setIsLoading(true);
      const newPet = {
        name,
        type: selectedType,
        color: hexColor?.hex,
        age,
      };

      try {
        const response = await createPet(newPet);

        resetFormValues();
        console.log(response);

        setIsSuccess(true);
      } catch (error) {
        console.log("Server error");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <div className={styles.input}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.input}>
          <label>Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Horse">Horse</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className={styles.input}>
          <label>Color</label>
          <SketchPicker color={hexColor} onChange={handleColorChange} />
        </div>

        <div className={styles.input}>
          <label>Age</label>
          <input
            type="number"
            min="0"
            max="20"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <input type="submit" value="Create new pet" />

        {error}
        {isLoading && "loading..."}
        {isSuccess && "Pet added"}
      </form>
    </div>
  );
};

export default Form;
