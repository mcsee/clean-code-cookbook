<?php

namespace phpUnitTutorial\Test;

use phpUnitTutorial\Payment;

class PaymentTest extends \PHPUnit_Framework_TestCase
{
    public function testProcessPaymentReturnsTrueOnSuccessfulPayment()
    {
        $paymentDetails = array(
            'amount'   => 123.99,
            'card_num' => '4111-1111-1111-1111',
            'exp_date' => '03/2013',
        );
   
        $payment = $this->getMockBuilder('\Payment')
            ->setConstructorArgs(array())
            ->getMock();
        // We should not mock a business object

        $authorizeNet = new \AuthorizeNetAIM($payment::API_ID, $payment::TRANS_KEY);
        // This is an external and coupled system.
        // We have no control on it so tests might be fragile

        $result = $payment->processPayment($authorizeNet, $paymentDetails);

        $this->assertTrue($result);
    }
}