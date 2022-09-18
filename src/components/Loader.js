import { Waveform } from "@uiball/loaders";

const Loader = () => (
  <div style={{ margin: 32, display: 'flex',  justifyContent:'center', alignItems:'center' }}>
    <Waveform 
      size={96}
      lineWeight={3.5}
      speed={1} 
      color="black" 
    />
  </div>
)

export default Loader
