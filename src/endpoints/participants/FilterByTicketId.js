import React from 'react';
import { SelectInput, crudGetList } from 'react-admin';
import { connect } from 'react-redux';

//https://github.com/marmelab/react-admin/blob/6015670a863bef868a0cafcfb1706187609a6369/packages/ra-core/src/actions/dataActions.js

class FilterByTicketId extends React.Component {
  componentWillMount() {
    const { crudGetList, event } = this.props;

    crudGetList(
      'tickets',
      { page: 1, perPage: 1000 },
      { field: 'id', order: 'ASC' },
      { event_id: event.id }
    );
  }

  buildTicketList() {
    const { data, list } = this.props.tickets;

    if (!'ids' in list || !Array.isArray(list.ids)) {
      return [];
    }

    return list.ids.map(id => ({ id: data[id].id, name: data[id].name }));
  }

  render() {
    const { source, allowEmpty } = this.props;

    return (
      <SelectInput
        source={source}
        allowEmpty={allowEmpty}
        choices={this.buildTicketList()}
      />
    );
  }
}

FilterByTicketId.defaultProps = {
  tickets: {},
  event: {}
};

export default connect(
  state => ({
    event: state.app.event,
    tickets: state.admin.resources.tickets
  }),
  { crudGetList }
)(FilterByTicketId);
