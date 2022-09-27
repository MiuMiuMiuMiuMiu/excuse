import axios from "axios";




const CallExcuse = (props) => {
    const axios = require('axios');

    axios.get('https://excuser.herokuapp.com/v1/excuse/office')
    .then(function (response) {
      // handle success
      console.log(response);
    })

    return (
        <div>
        </div>
    );
};

export default CallExcuse;