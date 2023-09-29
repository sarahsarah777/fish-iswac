import { Button, Col, Row, Typography } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import { headerTextColor } from '../../App'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import styles from '../Pages.module.css'

const { Title } = Typography;

export const Membership = (): JSX.Element => {

    const initialOptions = {
        clientId: 'Af5PZVi4ermxutNozQkAoiQkUCK3c-K057itMzo-xHnXB7ZeW-8SirWxjFQRYBIDTKGMzV1-8qfiqjS3',
        currency: 'USD',
        intent: 'capture',
    }
 // @ts-ignore
    const createRenewalOrder = (data: Record<string, unknown>, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: 'ISWAC Membership Renewal',
                    amount: {
                        currency_code: 'USD',
                        value: 47,
                    },
                },
            ],
        })
    }
 // @ts-ignore
    const createNewOrder = (data: Record<string, unknown>, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: 'ISWAC New Member',
                    amount: {
                        currency_code: 'USD',
                        value: 72,
                    },
                },
            ],
        })
    }
 // @ts-ignore
    const onApprove = (data: Record<string, unknown>, actions) => {
        return actions.order.capture().then(() => {
            alert('Payment successful!')
        })
    }

    return (
        <div className={styles.pagePadding}>
            <Title style={{color: headerTextColor}}>Membership</Title>
            <Row gutter={[16, 16]}>
                <Col md={24} lg={12} style={{paddingRight: '40px'}}>
                    <Title level={3} style={{color: headerTextColor}}>Membership fees are $70.00 for the first year and $45.00 per year annually.</Title>
                    <div>
                        <ol>
                        <li>A paid club member can bump a guest from a trip up to 30 days prior to trip departure. (Any and all fees paid to date for that trip will be fully refunded)</li>
                        <li>Guests and non-paid club members are charged an additional $15.00 per day on all trips</li>
                        <li>Paid club members receive special pricing and discounts of up to 10% from ISWAC sponsored tackle shops.</li>
                        </ol>
                    </div>                
                    <div>
                        *While ISWAC does not require a paid membership to join us at our meetings or go fishing with us, paid club members in good standing do share privileges that non-members do not.
                        <br/><br/>
                        ISWAC is autonomous and is not affiliated with any groups and has no political agenda. We are a structured club who's main objective is having fun, teaching others about conservation and introducing the next generation of fishermen why we are passionate about fishing.
                    </div>
                    <Title level={3} style={{color: headerTextColor}}>Become a Member</Title>
                    <div>
                        Simply print the membership application, fill it out, and send the fees to the PO Box listed, or come to our meetings on the first Wednesday of every month and sign up in person!
                        <br/><br/>
                        PO BOX 742 Upland, California 91785 - 0742
                        <br/>
                        <a href={require(`../../docs/Application.pdf`)} download='Membership Application' target='_blank' rel="noreferrer">
                            <Button style={{marginTop: '15px'}} type='primary' icon={<DownloadOutlined />}>Membership Application</Button>
                        </a>
                    </div>
                </Col>
                <Col md={24} lg={12} style={{width: '100%'}}>
                    <Title level={3} style={{color: headerTextColor}}>Pay Online</Title>
                    <Title level={5}>$70 for New Members plus a $2 website processing fee</Title>
                    <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons style={{ layout: "horizontal" }} createOrder={createNewOrder}
                        onApprove={onApprove}/>
                    </PayPalScriptProvider>
                    <Title level={5}>$45 for Renewal plus a $2 website processing fee</Title>
                    <PayPalScriptProvider options={initialOptions}>
                        <PayPalButtons style={{ layout: "horizontal" }} createOrder={createRenewalOrder}
                        onApprove={onApprove}/>
                    </PayPalScriptProvider>
                </Col>
            </Row>
        </div>
    )
}