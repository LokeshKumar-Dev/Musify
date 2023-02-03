import React from "react";
import { useNavigate } from "react-router";

import "./Header.css";
import { useStateValue } from "../../reducer/StateProvider";

import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { lightBlue } from "@material-ui/core/colors";

function Header() {
  const [{ user }] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header__left" onClick={() => navigate('/search')}>
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Playlist "
          type="text"
        />
      </div>
      <div className="header__right">
        {
          (user.data !== undefined) && (Object.values(user.data).length !== 0) ?
            <>
              <Avatar alt={user.data?.name} src={user.data?.photo || 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/602f4731226337.5646928c3633f.jpg'} />
              <h4>{user.data?.name}</h4>
            </> :
            <>
              <Button onClick={() => { }} href="/login" variant="contained" size="small" style={{ fontWeight: '600', borderColor: lightBlue[50] }}>SignIn</Button>
              {/* <Button onClick={() => {}} href="/login" variant="contained" size="small" style={{color: lightBlue[50],backgroundColor: lightBlue[800]}}>SignUp</Button> */}
            </>
        }

      </div>
    </div>
  );
}

export default Header;
