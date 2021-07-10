import { Fragment, /*useState, useEffect,*/ Component } from "react";
import Users from "./Users";
import ErrorBoundary from "./ErrorBoundary";
import UsersContext from "../store/user-context";
import style from "./UserFinder.module.css";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ filteredUsers: this.context.users });
    }, 2000);
  }

  searchChangeHandler = (event) => {
    this.setState(() => {
      return { searchTerm: event.target.value };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  render() {
    return (
      <Fragment>
        <div className={style.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       filteredUsers.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={style.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//         <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
