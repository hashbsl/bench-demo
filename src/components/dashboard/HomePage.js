import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { showDashboard } from '../../redux';
import { useLocation } from 'react-router-dom';


export default function HomePage() {
  const dispatch = useDispatch();
  const location = useLocation()
  const storeState = useSelector(state => state.dashboard.dashboard);
  const [isBlocking, setBlocking] = useState(false);
  function fetchDashboardData() {
    dispatch(showDashboard());
  }

  useEffect(() => {
    fetchDashboardData();
  }, [])


  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Title</th>
          <th scope='col'>Price</th>
          <th scope='col'>Rating</th>
          <th scope='col'>In Stock</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {storeState.length > 0 ? storeState.map(item => <tr>
          <td key={item.id}>
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='text-muted mb-0'>{item.id}</p>
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{item.title}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{item.price}</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>Available</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>) : 'No results found'}
      </MDBTableBody>
    </MDBTable>
  );
}