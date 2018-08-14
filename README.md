# Over-Engineered-Max-HR-Calculator

Max Heart Rate calculator built on a ridiculously over-engineered technology stack.

The formula used is 205.8 – (.685 x age), proposed by Dr Jason R Karp.

## But why so complicated?!

This project is actually meant to be a boilerplate project tying a couple of technologies together. The "Max HR calculator" part of it is just to give the project some usefulness (anything other than a todo list app!)

## Technology stack

- ✓ ASP.NET Core to serve static pages and handle any server-side logic.
- ✓ React for the web front-end.
- ✓ With React Router v4 for front-end routing. 
- ✓ With Redux on the front-end to manage state.
- ✓ Using Babel + Webpack + the latest javascript.
- ... Authentication with Google OAuth (using `react-google-login` npm package).
- Service Workers for offline capability.
- PouchDb for offline data synchronization.
- CouchDb for server-side data storage.
- ✓ Docker to tie it all together!

## Stretch goals:
- Stricter typing with TypeScript.
- Unit tests for Redux reducers.

## Front-end routes
- /  (shows the calculator, but only if the user is logged in)
- /about
- /login
- /logout

## Front-end state

    {
        auth : {
            loggedIn: true/false,
            name: "UserName from google login",
            status: {
                loginCallStatus: can be null, "busy", "failed" or "success",
                logoutCallStatus: can be null, "busy", "failed" or "success",
                errorMessage: "An error message, if status is failedLogin"
            }
        },
        calculator : { 
            age: null, 
            maxHr: null 
        }
    }


## Front-end component hierarchy

    <Header/>
    Route /logout renders Logout
    Route /login renders Login
    <LoginRequired> (renders Redirect if user not logged in yet)
        <LoggedInHome>
            <Navlinks...>
            <Switch>
                Route / renders Calculator
                Route /about renders About
            </Switch>
        </LoggedInHome>
    </LoginRequired>



