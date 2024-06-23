import CurrencyData from "currency-codes/data";
import Select from "react-select";
import { CountryCodeProps, CountryType } from "../settings/SettingsSelector";

// Props
export interface CurrencySelectProps {
  value?: string;
  onChange: (key: keyof CountryType, value: CountryCodeProps | string) => void;
}


interface Currency {
  code: string
  currency: string
}

// Constants
export const DEFAULT_CURRENCY = "USD - US Dollar";

// Component
const CurrencySelect = ({
  value = DEFAULT_CURRENCY,
  onChange,
}: CurrencySelectProps) => {



  // Prepare data
  const data = (CurrencyData as Currency[]).map(({ code, currency }) => {
    return {
      value: code + " - " + currency,
      label: code + " - " + currency,
    };
  });
  const defaultValue = { value: value, label: value };

  // Render
  return (
    <div style={{ marginBottom: '10px' }}>
      <label>
        Currency
        <Select
          options={data}
          defaultValue={defaultValue}
          onChange={(newValue) => {
            onChange('currency', newValue!.value);
          }}
        />
      </label>
    </div>
  );
};

export default CurrencySelect;
