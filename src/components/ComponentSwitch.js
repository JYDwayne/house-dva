import { List, Switch } from 'antd-mobile';
import { createForm } from 'rc-form';

let SwitchExample = (props) => {
  const { getFieldProps } = props.form;
  return (
      <Switch
          {...getFieldProps('Switch1', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          onClick={(checked) => { console.log(checked)}}
          onChange={(checked) => {console.log('test');}}
        />
  );
};

SwitchExample = createForm()(SwitchExample);

export default SwitchExample;