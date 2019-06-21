import { Chip, MenuItem, NoSsr, Paper, TextField, Typography } from "@material-ui/core";
import { createStyles, withStyles } from "@material-ui/core/styles";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import CancelIcon from "@material-ui/icons/Cancel";
import classNames from "classnames";
import React from "react";
import Select from "react-select";

const suggestions = [
  { label : "Krupp" },
  { label : "Mercator" },
  { label : "C3" },
  { label : "Nordmetall" },
  { label : "CS" },
  { label : "ECE" },
  { label : "IRPH" },
  { label: "Afghanistan" },
  { label: "Albania" },
  { label: "Algeria" },
  { label: "Anguilla" },
  { label: "Antarctica" },
  { label: "Antigua and Barbuda" },
  { label: "Argentina" },
  { label: "Armenia" },
].map((suggestion) => ({
  label: suggestion.label,
  value: suggestion.label,
}));

const styles = (theme: any) => createStyles({
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light" ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
  input: {
    display: "flex",
    padding: 0,
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  paper: {
    left: 0,
    marginTop: theme.spacing.unit,
    position: "absolute",
    right: 0,
    zIndex: 1,
  },
  placeholder: {
    fontSize: 16,
    left: 2,
    position: "absolute",
  },
  root: {
    flexGrow: 1,
    height: 250,
  },
  singleValue: {
    fontSize: 16,
  },
  valueContainer: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    overflow: "hidden",
  },
});

function NoOptionsMessage(props: any) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }: any) {
  return <div ref={inputRef} {...props} />;
}

function Control(props: any) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          children: props.children,
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          ...props.innerProps,
        },
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props: any) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props: any) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props: any) {
  return (
    <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
      {props.children}
    </Typography>
  );
}

function ValueContainer(props: any) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props: any) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function Menu(props: any) {
  return (
    <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

class IntegrationReactSelect extends React.Component {
  public state = {
    multi: null,
    single: null,
  };

  public handleChange = (name: any) => (value: any) => {
    this.setState({
      [name]: value,
    });
  }

  public render() {
    const { classes, theme }: any = this.props;

    const selectStyles = {
      input: (base: any) => ({
        "& input": {
          font: "inherit",
        },
        "color": theme.palette.text.primary,
        ...base,
      }),
    };

    return (
      <div className={classes.root}>
        <NoSsr>
          <Select
            classes={classes}
            styles={selectStyles}
            textFieldProps={{
              InputLabelProps: {
                shrink: true,
              },
              label: "Filters",
            }}
            options={suggestions}
            components={components}
            value={this.state.multi}
            onChange={this.handleChange("multi")}
            placeholder="Select multiple countries"
            isMulti
          />
        </NoSsr>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(IntegrationReactSelect);
