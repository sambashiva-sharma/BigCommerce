import { H3, Panel,Text,Button } from "@bigcommerce/big-design";
import Index from "./script";
import axios from "axios";

const Data = () => (
    // <Panel header="Homepage" margin="xxLarge">
    //     <Text>Hello world</Text>
    // </Panel>

<div style={{ textAlign: "right" }}>
<Button
  onClick={() => installScript()}
>
  Install
</Button>
</div>

);
const installScript =  async () => {
    await axios.get('https://api.bigcommerce.com/stores/jwt03jvujb/v3/content/scripts', {
        headers: {
            "accept": "application/json",
            "Content-type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          'X-Auth-Token': 'tw4hd9wrw1qmmrl1kinxt1f7j4ktsif' 
        }
      }).then((response) => {
        console.log("response",response);
      
      })
}

export default Data;