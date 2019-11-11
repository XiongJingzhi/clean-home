import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import { colors, fontSize } from '@styles/styles'
import { ReactComponent as HomeIcon } from '@icons/home.svg'
import { ReactComponent as HomeIconFill } from '@icons/home-fill.svg'
import { ReactComponent as UserIcon } from '@icons/user.svg'
import { ReactComponent as UserIconFill } from '@icons/user-fill.svg'
import Home from '@/pages/home'
import Profile from '@/pages/profile'

export default function HomeLayout() {
  const [hidden] = useState(false)
  const history = useHistory()
  const location = useLocation()

  return (
    <>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
      </Switch>
      <TabBar
        unselectedTintColor={colors["background-color"]}
        tintColor={colors["theme-color"]}
        barTintColor={colors["theme-color-shadow"]}
        hidden={hidden}
      >
        <TabBar.Item
          title="首页"
          key="home"
          icon={<HomeIcon width={22} height={22} />}
          selectedIcon={ <HomeIconFill width={22} height={22} />}
          selected={ location.pathname === '/'}
          onPress={() => {
            if (location.pathname === '/') return
            history.push('/')
          }}
          style={{fontSize: fontSize["font-size-m"]}}
        >
        </TabBar.Item>
        <TabBar.Item
          title="我的"
          key="profile"
          icon={<UserIcon width={25} height={25} />}
          selectedIcon={ <UserIconFill width={25} height={25} />}
          selected={location.pathname === '/profile'}
          onPress={() => {
            if (location.pathname === '/profile') return
            history.push({
              pathname: '/profile',
              state: {
                fromProfile: true
              }
            })
          }}
          className={{fontSize: fontSize["font-size-m"]}}
        >
        </TabBar.Item>
      </TabBar>
    </>
  )
}
