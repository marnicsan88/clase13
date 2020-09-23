import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

import './css/searchBoxStyles.css';

const Searchbox = (props) => {
  const lupita = <FontAwesomeIcon icon={faSearch} />
  return (
      <InputGroup className="search-width" size="sm">
        <InputGroupAddon addonType="prepend">
          <UncontrolledButtonDropdown >
            <DropdownToggle caret color="info" size="sm" className="w-25">
              Todos
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Categoría 1</DropdownItem>
              <DropdownItem>Categoría 2</DropdownItem>
              <DropdownItem>Categoría 3</DropdownItem>
              <DropdownItem>Categoría 4</DropdownItem>
            </DropdownMenu>
            </UncontrolledButtonDropdown>
        </InputGroupAddon>
        <Input placeholder="Buscar Producto..." style={{backgroundClip:"border-box"}} />
        <InputGroupAddon addonType="append">
          <InputGroupText>{lupita}</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
  );
}

export default Searchbox;