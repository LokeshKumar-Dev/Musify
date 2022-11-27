import React, { useEffect, useState } from 'react';

import { Lang, useFormInputValidation } from "react-form-input-validation";


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export function SignInForm({ handleChangeFunc }) {
    const [fields, errors, form] = useFormInputValidation(
        {
            email_address: "",
            password: "",
        },
        {
            email_address: "required|email",
            password: ["required", "regex:/^(?=.*[0-9])(?=.*[A-Z])(?!.* ).{8,16}$/"],
        }
    );

    form.useLang(Lang.en);

    useEffect(() => {
        if (form.isValidForm) {
            console.log("MAKE AN API CALL ==> useEffect", fields, errors, form);
        }
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(event)
        console.log("MAKE AN API CALL", fields, errors);
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
                        autoFocus
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
        </>
    )
}

export function SignUpForm() {
    const [passwordC, setPasswordC] = useState('')
    const [username, setUsername] = useState('')

    const [fields, errors, form] = useFormInputValidation(
        {
            username: "",
            email_address: "",
            password: "",
            password_confirmation: "",
        },
        {
            username: "required|min:5|max:16",
            email_address: "required|email",
            password: ["required", "regex:/^(?=.*[0-9])(?=.*[A-Z])(?!.* ).{8,16}$/"],
            password_confirmation: "required|same:password",
        }
    );

    useEffect(() => {
        form.registerAsync("username_available", function (
            username,
            attribute,
            req,
            passes
        ) {
            setTimeout(() => {
                if (username === "fooled")
                    passes(false, "Username has already been taken.");
                // if username is not available
                else passes();
            }, 1000);
        });
    }, []);

    const handleSubmit = async (event) => {
        const isValid = await form.validate(event);
        console.log("Event", event, isValid);
        if (isValid) {
            console.log("MAKE AN API CALL", fields, errors);
        }
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
                    <span className="input_info">Note: atleast 1 Digit, 1 UpperCase, 8 Character Long</span>
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
                >
                    Create Account
                </Button>
            </Box>
        </>
    )
}