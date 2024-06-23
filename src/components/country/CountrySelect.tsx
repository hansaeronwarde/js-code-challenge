import countries from "i18n-iso-countries";
import Select, { MultiValue, SingleValue } from "react-select";
import { CountrySelectOption } from "./CountrySelectOption";
import { CountryType } from "../settings/SettingsSelector";
// Register countries
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// --- TASK G ---
// Please replace "any" with a proper type in this file (and where it is needed).

// Props
interface CountrySelectProps {
  value?: { code: string; name: string; };
  onChange: (key: keyof CountryType, value: { code: string; name: string; } | string) => void;
}


// Constants
export const DEFAULT_COUNTRY = {
  code: "US",
  name: "United States of America",
};

// Component
export const CountrySelect = ({
  value = DEFAULT_COUNTRY,
  onChange,
}: CountrySelectProps) => {


  // Prepare Data
  const data = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map(([code, name]) => {
    return {
      value: { code, name },
      label: name,
    };
  });
  const defaultValue = { value: value, label: value.name };

  // Render
  return (
    <div>
      <label>
        Country
        <Select
          options={data}
          components={{ Option: CountrySelectOption }}
          defaultValue={defaultValue}
          isMulti={false}
          onChange={(newValue) => {
            onChange('country', newValue!.value);

          }}
        />
      </label>
    </div>
  );
};

export default CountrySelect;
