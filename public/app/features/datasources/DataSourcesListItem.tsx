import React, { PureComponent } from 'react';
import { DataSourceSettings } from '@grafana/ui/src/types';

export interface Props {
  dataSource: DataSourceSettings;
}

export class DataSourcesListItem extends PureComponent<Props> {
  render() {
    const { dataSource } = this.props;
    return (
      <li className="card-item-wrapper">
        <a className="add-data-source-item" href={`datasources/edit/${dataSource.id}`}>
          <img className="add-data-source-item-logo" src={dataSource.typeLogoUrl} alt={dataSource.name} />
          <div className="add-data-source-item-text-wrapper">
            <span className="add-data-source-item-text">{dataSource.name}</span>
            {dataSource.url && <span className="add-data-source-item-desc">{dataSource.url}</span>}
          </div>
          <div className="add-data-source-item-actions">
            <button className="btn btn-inverse">Explore</button>
            <button className="btn btn-inverse">Dashboards</button>
            <button className="btn btn-secondary">Configure</button>
          </div>
        </a>
      </li>
    );
  }
}

export default DataSourcesListItem;
