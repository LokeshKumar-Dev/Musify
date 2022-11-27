import React from "react";
import "./Header.css";
import { useStateValue } from "../../reducer/StateProvider";

import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import {lightBlue} from "@material-ui/core/colors";

function Header() {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        {
          Object.values(user).length !== 0 ?
            <>
              <Avatar alt={user?.display_name} src={user?.images[0].url} />
              <h4>{user?.name}</h4>
            </> :
            <>
              <Button onClick={() => {}} href="/login" variant="outlined" size="small" style={{color: lightBlue[50], borderColor: lightBlue[50]}}>SignIn</Button>
              {/* <Button onClick={() => {}} href="/login" variant="contained" size="small" style={{color: lightBlue[50],backgroundColor: lightBlue[800]}}>SignUp</Button> */}
            </>
        }

      </div>
    </div>
  );
}

export default Header;
