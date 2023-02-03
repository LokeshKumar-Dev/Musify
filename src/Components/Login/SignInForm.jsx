import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Lang, useFormInputValidation } from "react-form-input-validation";

import musicApi from '../../api/musicApi';
import { useStateValue } from "../../reducer/StateProvider";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function SignInForm({ handleChangeFunc }) {
    const [fields, errors, form] = useFormInputValidation(
        {
            email_address: "",
            password: "",
        },
        {
            email_address: "required|email",
            password: ["required"],
        }
    );
    const [{ }, dispatch] = useStateValue();
    const navigate = useNavigate();

    //Local Variable
    const [alert, setAlert] = useState(0);
    const [msg, setMsg] = useState(['error', 'Internal Server Error. Try Again!']);

    form.useLang(Lang.en);

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Check Inputs are correct
        if ((fields.email_address === '' || fields.password === '') || Object.keys(errors).length !== 0) {
            return console.log("DON'T make API", fields, errors, form);
        }

        //Make api call atlast
        musicApi.post(`/user/login`, {
            email: fields.email_address,
            password: fields.password,
        })
            .then(async (res) => {
                setMsg(['success', 'Successfully logged in!']);
                setAlert(1);

                dispatch({
                    type: "SET_USER",
                    user: {
                        token: res.data.token,
                        data: res.data.user,
                    }
                });
                await sleep(1000);

                return navigate('/');
            })
            .catch((err) => {
                if (err.response.status > 450) {
                    setMsg(['error', 'Email or Password are incorrect!']);
                    return setAlert(1);
                }
                return setAlert(1);
            });
    };
    return (
        <>
            <Box
                component="form"
                onSubmit={handleSubmit}
                className="myForm"
                noValidate
                autoComplete="off"
            >
                <>
                    <TextField
                        required
                        fullWidth
                        size="small"
                        id="email"
                        label="Email Address"
                        name="email_address"
                        autoComplete="email"
                        onBlur={form.handleBlurEvent}
                        onChange={form.handleChangeEvent}
                        value={fields.email_address}
                    />
                    <label className="error">
                        {errors.email_address ? errors.email_address : ""}
                    </label>
                </>
                <>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onBlur={form.handleBlurEvent}
                        onChange={form.handleChangeEvent}
                        value={fields.password}
                    />
                    <label className="error">
                        {errors.password ? errors.password : ""}
                    </label>
                </>

                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    style={{ fontSize: '10px!important' }}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    style={{ backgroundColor: '#0a385c' }}
                >
                    Sign In
                </Button>
            </Box>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link onClick={() => handleChangeFunc(null, 1)} variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
            <Snackbar open={alert} autoHideDuration={2000} onClose={() => setAlert(0)}
                style={{
                    "left": "50%",
                    "transform": "translateX(-50%)"
                }}
            >
                <Alert onClose={() => setAlert(0)} severity={msg[0]} sx={{ width: '100%' }}>
                    {msg[1]}
                </Alert>
            </Snackbar>
        </>
    )
}

export function SignUpForm() {
    const [fields, errors, form] = useFormInputValidation(
        {
            username: "",
            email_address: "",
            password: "",
            password_confirmation: "",
        },
        {
            username: ["required", 'regex:/^.{4,20}$/'],
            email_address: "required|email",
            password: ["required", 'regex:/^.{8,20}$/'],
            password_confirmation: "required|same:password",
        }
    );

    const [{ }, dispatch] = useStateValue();
    const [msg, setMsg] = useState(['error', 'Internal Server Error. Try Again!']);
    const [alert, setAlert] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        const isValid = await form.validate(event);

        //Check Inputs are correct
        if (!isValid || Object.keys(errors).length !== 0) {
            setMsg(['error', 'Check values correctly!']);
            return setAlert(1);
        }

        //Make api call atlast
        musicApi.post(`/user/signup`, {
            name: fields.username,
            email: fields.email_address,
            password: fields.password,
            passwordConfirm: fields.password_confirmation,
        })
            .then(async (res) => {
                setMsg(['success', 'Successfully signed up!, Now Login']);
                setAlert(1);
                dispatch({
                    type: "SET_USER",
                    user: {
                        token: res.data.token,
                        data: res.data.user,
                    }
                });
                await sleep(1000);

                return navigate('/');
            })
            .catch((err) => {
                const status = err.response.status;
                if (status > 450 && status < 500) {
                    setMsg(['error', 'Email are already exist!']);
                }
                else if (status > 500) {
                    setMsg(['error', 'Internal Server Error, Please Try Later!']);
                }
                setMsg(['error', 'Internal Server Error, Please Try Later!']);
                return setAlert(1);
            });
    };
    return (
        <>
            <Box component="form" onSubmit={handleSubmit} noValidate>
                <>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        id="name"
                        label="User Name"
                        name="username"
                        onBlur={form.handleBlurEvent}
                        onChange={form.handleChangeEvent}
                        value={fields.username}
                        // To override the attribute name
                        data-attribute-name="Customer Name"
                        data-async
                    />
                    <label className="error">
                        {errors.username ? errors.username : ""}
                    </label>
                </>
                <>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        id="email"
                        label="Email Address"
                        name="email_address"
                        autoComplete="email"
                        onBlur={form.handleBlurEvent}
                        onChange={form.handleChangeEvent}
                        value={fields.email_address}
                    />
                    <label className="error">
                        {errors.email_address ? errors.email_address : ""}
                    </label>
                </>
                <>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onBlur={form.handleBlurEvent}
                        onChange={form.handleChangeEvent}
                        value={fields.password}
                    />
                    <span className="input_info">Note: 8 Character Long</span>
                    <label className="error">
                        {errors.password ? errors.password : ""}
                    </label>
                </>
                <>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        size="small"
                        name="password_confirmation"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        onBlur={form.handleBlurEvent}
                        onChange={form.handleChangeEvent}
                        value={fields.password_confirmation}
                    />
                    <label className="error">
                        {errors.password_confirmation ? errors.password_confirmation : ""}
                    </label>
                </>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    style={{ backgroundColor: '#0a385c' }}
                >
                    Create Account
                </Button>
            </Box>
            <Snackbar open={alert} autoHideDuration={2000} onClose={() => setAlert(0)}
                style={{
                    "left": "50%",
                    "transform": "translateX(-50%)"
                }}
            >
                <Alert onClose={() => setAlert(0)} severity={msg[0]} sx={{ width: '100%' }}>
                    {msg[1]}
                </Alert>
            </Snackbar>
        </>
    )
}