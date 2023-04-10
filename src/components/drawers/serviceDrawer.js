import Drawer from "@mui/material/Drawer";
function ServiceDrawer({ openFlag, toggleDrawer, itemObj }) {
  return (
    <Drawer className="service-drawer" anchor={"right"} open={openFlag}>
      <section className="drawer-wrapper">
        <h1 className="close" onClick={toggleDrawer}>
          x
        </h1>
        <h1 className="title">{itemObj.name}</h1>
      </section>
    </Drawer>
  );
}

export default ServiceDrawer;
