import * as React from "react";
import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import { Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { ArrowDownward, ArrowDropDown, ExpandMore } from "@mui/icons-material";

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 10px;
`
);

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")(
  ({ theme }) => `
  width: 300px;
  min-width : 150px;
  position : relative;
  paddingRight : 120px;
  min-height : 38px;
  border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  border-radius: 4px;
  padding: 6px;
  display: flex;
  align-items : center;
  flex-wrap: wrap;
  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  &.focused {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & .end-element {
    position : absolute;
    right : 10px;
    top : 50%;
    transform : translateY(-50%);
    display : flex;
    gap : 5px;
  }

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon
        sx={{
          marginLeft: "2px",
          "&:hover": {
            background: "rgb(255, 189, 173)",
          },
        }}
        fontSize="large"
        onClick={onDelete}
      />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 22px;
  margin: 2px;
  line-height: 22px;
  gap : 0px;
  background-color: ${
    theme.palette.mode === "dark"
      ? "rgba(255,255,255,0.08)"
      : "rgb(230, 230, 230)"
  };
  border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0px 0px 0px 8px ;
  outline: 0;
  overflow: hidden;
  

  &:focus {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    font-size :  8px;
    text-overflow: ellipsis;
    font-weight : 400;
  }
  & svg {
    font-size: 7px;
    cursor: pointer;
   height : 100%;
   width : 22px
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 10px 12px;
    display: flex;
    font-size : 10px;
    align-items : center;
    justify-content : center;
    font-weight : 400;
    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

export default function MultipleAutoComplete({ options, setValue, values }) {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "multiple_auto_complete",
    multiple: true,
    value: values,
    options: options,
    onChange: (event, newValues) => {
      setValue && setValue(newValues);
    },
  });

  return (
    <Root>
      <div {...getRootProps()}>
        {/* <Label {...getInputLabelProps()}>Customized hook</Label> */}
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option, index) => (
            <StyledTag label={option} {...getTagProps({ index })} />
          ))}
          <input placeholder="Roles" {...getInputProps()} />
          <div className="end-element">
            {value.length > 0 && (
              <CloseIcon
                fontSize="small"
                sx={{
                  "&:hover": {
                    color: "black",
                  },
                  transition: ".3s ease-in-out color",
                  color: "grey",
                }}
                onClick={() => setValue([])}
              />
            )}
            <Divider orientation="vertical" flexItem />
            <ExpandMore
              fontSize="small"
              sx={{
                "&:hover": {
                  color: "black",
                },
                transition: ".3s ease-in-out color",

                color: "grey",
              }}
            />
          </div>
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
}
