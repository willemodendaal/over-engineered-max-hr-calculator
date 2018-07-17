# /Containers

Containers know about Redux. Use to connect presentational components to redux state and the dispatch function.

## Example usage

From the React-Redux documentation at: https://redux.js.org/basics/usage-with-react#implementing-components

```es6
    import { connect } from 'react-redux'
    import { setVisibilityFilter } from '../actions'
    import Link from '../components/Link'
    ​
    const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
    }
    ​
    const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
    }
    ​
    const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
    )(Link)
    ​
    export default FilterLink
```
