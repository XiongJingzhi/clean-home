import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { TabBar } from 'antd-mobile'
import { colors, fontSize } from '@styles/styles'
import { ReactComponent as HomeIcon } from '@icons/home.svg'
import { ReactComponent as HomeIconFill } from '@icons/home-fill.svg'
import { ReactComponent as UserIcon } from '@icons/user.svg'
import { ReactComponent as UserIconFill } from '@icons/user-fill.svg'

export default function HomeLayout(props) {
  const {
    children
  } = props
  const [hidden] = useState(false)
  const history = useHistory()
  const location = useLocation()
  
  return (
    <>
      {children}
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
            history.push('profile')
          }}
          className={{fontSize: fontSize["font-size-m"]}}
        >
        </TabBar.Item>
      </TabBar>
    </>
  )
}
