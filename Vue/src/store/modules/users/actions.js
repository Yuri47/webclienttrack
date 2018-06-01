import axios from 'axios'

const userList = ({commit}, obj) => {
  axios.get(
    'http://www.guedex.com/api/users',
   {headers: {
       "Authorization": btoa("admin" + ":" + "admin")
     }
   }
 )
 .then((response) => {
     var response = response.data
     window.console.log(response.data)
   },
   (error) => {
     var status = error.response.status
   }
 )
  
}

export default {
  userList
}
