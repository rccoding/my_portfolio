import { Html,useProgress } from "@react-three/drei"

const Loader = () => {
  const {progress} =useProgress();
  return (
    <Html>
      <span>
        <p style={{
            fontSize:14,
            color:"fffff",
            fontWeight:800,
            marginTop:40
          }}>
          {progress.toFixed(2)}%

        </p>
      </span>
    </Html>
  )
}

export default Loader