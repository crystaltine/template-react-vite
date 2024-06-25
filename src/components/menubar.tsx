import '../styles/menubar/menubar.css'

interface MenubarProps {
  selected?: string;
}

const Menubar = (props: MenubarProps) => {

  return (
    <div className='menubar-main'>
      Menubar | selected: {props.selected}
    </div>
  );
};

export default Menubar;