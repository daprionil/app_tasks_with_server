function ToggleSwitch({name,checked,functionChange}) {
    return (
        <input
            className="switch-toggle shadow-all"
            type="checkbox"
            name={name}
            checked={checked}
            onChange={functionChange}
        />
    );
}

export default ToggleSwitch;