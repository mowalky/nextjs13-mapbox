const TopNavBar = ({ update }: any) => {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "pink",
        width: "100%",
        height: "50px",
        zIndex: 10,
        boxShadow: "0 0 15px 15px rgba(0,0,0,0.5)",
      }}
    >
      <button onClick={update}>Update</button>
    </div>
  );
};

export default TopNavBar;
