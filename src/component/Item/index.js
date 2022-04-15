export default function Item(props) {
    return (
      <div>
        <span>{props.title}</span>
        <button>Edit</button>
        <button>Del</button>
      </div>
    );
  }