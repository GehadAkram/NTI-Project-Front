import { Component } from '@angular/core';

@Component({
  selector: 'app-policies',
  standalone: false,
  
  templateUrl: './policies.component.html',
  styleUrl: './policies.component.css'
})
export class PoliciesComponent {

  shipping: String = "We strive to ensure that your order reaches you as quickly and efficiently as possible. Our shipping services are designed to provide timely delivery to your doorstep, with options available for standard and expedited shipping. Once your order is placed, you will receive a confirmation email with tracking information, so you can monitor your shipment's progress. We currently offer shipping to various locations, and our team is dedicated to handling your order with care, ensuring that it arrives in perfect condition. Enjoy peace of mind knowing that we are committed to delivering your products promptly.";
  returns: String = "Your satisfaction is our priority, which is why we offer a straightforward returns policy. If you are not completely satisfied with your purchase, you may return it within 30 days of receipt for a full refund or exchange. Items must be in their original condition, unworn, and with all tags attached. To initiate a return, simply contact our customer service team for assistance. We believe that shopping should be worry-free, so we ensure that the return process is easy and hassle-free for our valued customers.";
  payment: String = "We understand the importance of flexibility in payment options, which is why we offer a convenient payment-on-delivery service. This allows you to pay for your order at your doorstep, ensuring that you are completely satisfied with your purchase before making a payment. Our delivery personnel will accept cash or card payments, making the process seamless and secure. This option is particularly beneficial for those who prefer to inspect their items before paying, providing an extra layer of trust and convenience in your shopping experience.";
  faqs: String = "We know that you may have questions regarding our products and services, and our FAQs section is here to help! We have compiled a list of the most frequently asked questions to provide you with quick and informative answers. From inquiries about shipping times and return procedures to payment options and product details, we aim to address all your concerns. If you don’t find the answer you’re looking for, our customer service team is always available to assist you further. We are committed to ensuring that your experience with us is as smooth and enjoyable as possible.";

}
