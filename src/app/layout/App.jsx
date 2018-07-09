import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import  EventDashboard    from '../../features/events/EventDashboard/EventDashboard';
import  NavBar            from '../../features/nav/NavBar/NavBar';
import  EventForm         from '../../features/events/EventForm/EventForm';
import  SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import  UserDetailPage    from '../../features/user/UserDetail/UserDetailPage';
import  PeopleDashboard   from '../../features/user/PeopleDashboard/PeopleDashboard';
import  EventDetailPage   from '../../features/events/EventDetail/EventDetailPage';
import  HomePage          from "../../features/home/HomePage";


class App extends Component {
  render() {
    return (
        <div>
          <Switch>
            <Route exact path='/' component={HomePage}/>
          </Switch>
          <Route path="/(.+)" render={() => (
              <div>
                <NavBar/>
                <Container className="main">
                  <Switch>
                    <Route path='/events' component={EventDashboard}/>
                    <Route path='/event/:id' component={EventDetailPage}/>
                    <Route path='/people' component={PeopleDashboard}/>
                    <Route path='/profile/:id' component={UserDetailPage}/>
                    <Route path='/settings' component={SettingsDashboard}/>
                    <Route path='/createEvent' component={EventForm}/>
                  </Switch>
                </Container>
              </div>
          )} />
        </div>
    );
  }
}

export default App;
