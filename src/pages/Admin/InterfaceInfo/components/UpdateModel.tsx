import {
  ProColumns,
   ProTable,
} from '@ant-design/pro-components';
import React, {useEffect, useRef} from 'react';
import {Modal} from "antd";
import {ProFormInstance} from "@ant-design/pro-form/lib";



export type Props = {
  columns:ProColumns<API.InterfaceInfo>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfo) => Promise<void>;
  values: API.InterfaceInfo;
  visible:boolean;
};

const UpdateModel: React.FC<Props> = (props) => {
  const {values,visible,columns,onCancel,onSubmit} = props;
  const fromRef = useRef<ProFormInstance>();

  useEffect(()=>{
    if(fromRef){
    fromRef.current?.setFieldsValue(values);
    }
  },[values])

  return <Modal visible={visible} footer={null} onCancel={()=>onCancel?.()}>
    <ProTable type="form"
              columns={columns }
              formRef={fromRef}
              form={{initialValues:values}}
              onSubmit={async (value)=>{onSubmit?.(value)}}/>
  </Modal>;

};
export default UpdateModel;
