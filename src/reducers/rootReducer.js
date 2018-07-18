const initialState = 
{
    auth: { loggedIn: false },
    calculator: { age: null, maxHr: null }
};

export default function(oldState = initialState, action)
{
    //Not doing any state changes just yet.
    return oldState;
}