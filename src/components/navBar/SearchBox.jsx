import React from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

import './css/searchBoxStyles.css';

const Searchbox = (props) => {
  const lupita = <FontAwesomeIcon icon={faSearch} />

  const selectOption = (evt) => {
    document.querySelectorAll("button.dropdown-toggle")[0].textContent = evt.target.textContent;
  }

  return (
      <InputGroup className="search-width" size="sm">
        <InputGroupAddon addonType="prepend">
          <UncontrolledButtonDropdown >
            <DropdownToggle caret color="info" size="sm" className="w-25">
              Todos
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem id="-1" key="-1" onClick={selectOption}>Todos</DropdownItem>
              {props.categorias.map(categoria => <DropdownItem id={categoria.key} key={categoria.key} onClick={selectOption}>{categoria.descripcion}</DropdownItem>)}
            </DropdownMenu>
            </UncontrolledButtonDropdown>
        </InputGroupAddon>
        <Input placeholder="Buscar Producto..." style={{backgroundClip:"border-box"}} />
        <InputGroupAddon addonType="append">
          <Button color="primary">{lupita}</Button>
        </InputGroupAddon>
      </InputGroup>
  );
}

export default Searchbox;