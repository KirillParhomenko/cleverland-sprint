const FindItem = (props) => {
  return (
    <a
      onClick={() => {
        window.scroll({
          top:
            props.sneakerRef.current.offsetTop -
            props.sneakerRef.current.offsetHeight / 2,
          behavior: "smooth",
        });
        props.disableFoundItem();
      }}
    >
      {props.name}
    </a>
  );
};

export default FindItem;
