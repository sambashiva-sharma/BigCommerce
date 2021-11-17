import { H3, Panel,Text,Button } from "@bigcommerce/big-design";
import axios from "axios";

const installScript =  async () => {
    const { data } = await axios.get('https://api.bigcommerce.com/stores/jwt03jvujb/v3/content/scripts', {
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': 'tw4hd9wrw1qmmrl1kinxt1f7j4ktsif' 
        }
      });
   console.log("response",data);
}
<div style={{ textAlign: "right" }}>
                <Button
                  onClick={() => installScript()}
                >
                  Install
                </Button>
              </div>
  
export default installScript;