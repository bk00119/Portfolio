import {
  SwipeableDrawer,
  Box,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material"
import Link from "next/link"

export default function SideMenu({
  showMenu,
  setShowMenu,
  menuList,
  pathname,
}) {
  function changeShowMenu() {
    setShowMenu(!showMenu)
  }
  return (
    <SwipeableDrawer
      anchor="right"
      open={showMenu}
      onClose={() => changeShowMenu(false)}
      onOpen={() => changeShowMenu(true)}
    >
      <Box
        sx={{ width: 200 }}
        role="presentation"
        onClick={() => changeShowMenu(false)}
        onKeyDown={() => changeShowMenu(true)}
      >
        <List>
          {menuList.map(({ name, dir }) => (
            <ListItem key={name} alignItems="center">
              <Link href={dir} className="w-full">
                <ListItemButton
                  className="hover:text-brown"
                >
                  <p
                    className={
                      "text-2xl " +
                      (pathname === dir && "underline underline-offset-8")
                    }
                  >
                    {name}
                  </p>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  )
}
