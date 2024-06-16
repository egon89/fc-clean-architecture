import { toXML } from 'jstoxml';
import { OutputListCustomerDto } from '../../../usecase/customer/list/list.customer.dto';
import { xmlOptionConfig } from './presenter.config';

export default class CustomerPresenter {
  static listXML(data: OutputListCustomerDto): string {
    return toXML(
      {
        customers: {
          customer: data.customers.map((customer) => ({
            id: customer.id,
            name: customer.name,
            address: {
              street: customer.address.street,
              number: customer.address.number,
              zip: customer.address.zip,
              city: customer.address.city,
            },
          })),
        },
      },
      xmlOptionConfig
    );
  }
}
