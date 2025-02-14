import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-community/picker";

interface Props {
  data: Array<string>;
  selectedItem?: number;
  onItemSelected?: Function;
  disabled?: boolean;
}

const WheelPicker = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState(props.selectedItem || 0);
  const { data, onItemSelected, disabled } = props;
  if (!data || data.length === 0) return null;
  return (
    <View pointerEvents={disabled ? "none" : "auto"}>
      <Picker
        {...props}
        selectedValue={data[selectedItem]}
        onValueChange={(_: any, index: number): void => {
          if (onItemSelected) onItemSelected(index);
          setSelectedItem(index);
        }}
      >
        {data.map((i, index) => (
          <Picker.Item key={index} label={i} value={i} />
        ))}
      </Picker>
    </View>
  );
};

export default WheelPicker;
