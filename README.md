# 终端显示git分支
function git_branch {
  branch="`git branch 2>/dev/null | grep "^\*" | sed -e "s/^\*\ //"`"
  if [ "${branch}" != "" ];then
      if [ "${branch}" = "(no branch)" ];then
          branch="(`git rev-parse --short HEAD`...)"
      fi
      echo " ($branch)"
  fi
}

export PS1='\u@\h \[\033[01;36m\]\W\[\033[01;32m\]$(git_branch)\[\033[00m\] \$ '

# little-demo

## 我是h2

### 我是h3

#### 我是h4

##### 我是h5

###### 我是h6

1606脱产小demo

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

1. sfdsfsd
2. 5465464s
3. sfdsfsd


- sfdsfsd
- fsfdsfsd
- sfdsfsd
- adas

[百度](http://www.baidu.com)

![ssfdsf](http://7xopqp.com1.z0.glb.clouddn.com/contain1.jpg)

**sfdsfsd**

__sfsdfds__

_fsdfds_

*sfdfsd*

我是一个**P**标签

- fdsfdf
  - sfdsfdfa
  - sfdf
- sfdsfdfa
- sfdsfsd

***

___

```js
console.log('aaa')
```

```js
import axios from 'axios';

function searchGit (add) {
  let address = `https://api.github.com/users/${add}`;
  return axios.get(address)
    .then( (res) => (
      { getDate:res.data }
    ))
    .catch(function (error) {
      alert(error);
    });
}
```

我们今天还是学`react`，这个东西老好了

| Header One     | Header Two     | sfadads |
| :------------- | :------------- | :------|
| Item One       | Item Two       | asads |

> sfdsfjdsfjaslkfjds
