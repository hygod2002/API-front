import { PageContainer } from '@ant-design/pro-components';
import React, {useEffect, useState} from 'react';
import {Button, Card, Descriptions, Form, Input, message, Checkbox, Divider} from "antd";
import {
  getinterfaceinfoByIdUsingGET, invokeInterfaceInfoUsingPOST,
} from "@/services/API-backend/interfaceInfoController";
import {useParams} from "@@/exports";

/**
 * 主页
 * @constructor
 */
const Index: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.InterfaceInfo>();
  const params  = useParams();
  const [invokeres,setInvokeres] = useState<any>();
  const [invokeLoading,setinvokeLoading] =useState(false);
  const onFinish = async (values:any) =>{
    if (!params.id){
      message.error('接口不存在')
      return ;
    }
    setinvokeLoading(true);
    try {
      const res = await invokeInterfaceInfoUsingPOST({
        id:params.id,
        ...values
      });
      setInvokeres(res.data);
      message.success('请求成功')
      return true;

    }catch (error:any){
      message.error('操作失败'+error.message);
    }
    setinvokeLoading(false);
  }

  const loadData = async () =>{
    if (!params.id){
      message.error('参数不存在');
      return ;
    }
    setLoading(true);
    try {
      const res = await getinterfaceinfoByIdUsingGET({
        id: Number(params.id)
      });
      setData(res.data);

    } catch (error: any) {

      message.error('请求失败,'+error.message);
      return false;
    }
    setLoading(false);
  }
  useEffect(() => {
    loadData();
  },[])

  return (
    <PageContainer title="查看接口文档">
      <Card>
        {
          data?(

              <Descriptions title={data.name} column={1} extra={<Button>调用</Button>}>
              <Descriptions.Item label="描述">{data.description}</Descriptions.Item>
              <Descriptions.Item label="接口状态">{data.status? '正常': '关闭'}</Descriptions.Item>
              <Descriptions.Item label="请求地址">{data.url}</Descriptions.Item>
              <Descriptions.Item label="请求方法">{data.method}</Descriptions.Item>
              <Descriptions.Item label="请求头">{data.requestHeader}</Descriptions.Item>
              <Descriptions.Item label="响应头">{data.responseHeader}</Descriptions.Item>
              <Descriptions.Item label="创建时间">{data.createTime}</Descriptions.Item>
              <Descriptions.Item label="更新时间">{data.updateTime}</Descriptions.Item>
            </Descriptions>
          ):(
            <>接口不存在</>
          )}
      </Card>
      <Divider/>
      <Card title="在线测试">
        <Form
          name="invoke"
          layout="vertical"
          initialValues={{remember:true}}
          onFinish={onFinish}
        >

          <Form.Item
            label="请求参数"
            name="userRequestParams"
            >
            <Input.TextArea/>
          </Form.Item>

          <Form.Item wrapperCol={{ span:16}}>
            <Button type="primary" htmlType="submit">
              调用
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Divider/>
      <Card title="测试结果" >{invokeres}</Card>
    </PageContainer>
  );
};

export default Index;
