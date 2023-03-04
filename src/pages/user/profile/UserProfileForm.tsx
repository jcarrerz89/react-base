import { Button, FormControl, TextField, FormGroup } from "@mui/material";
import { useState } from "react";
import Characters from "../../../enum/char";

const UserProfileForm = () => {
  const [name, setName] = useState(Characters.EMPTY);
  const [email, setEmail] = useState(Characters.EMPTY);
  const [message, setMessage] = useState(Characters.EMPTY);

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormControl>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </FormControl>
        <FormControl>
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={handleMessageChange}
            required
          />
        </FormControl>
        <FormControl>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </FormControl>
      </FormGroup>
    </form>
  );
}

export default UserProfileForm;