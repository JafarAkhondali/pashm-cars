<template xmlns:v-touch="http://www.w3.org/1999/xhtml">
    <div id="app">
        <div id="water"
             style="background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAQAAABh3xcBAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfjBRMWHheZcdFXAAArZElEQVR42u3deZwcdZ3/8VfPPclMZnJOTpIQEiAHCSThRgi3riKHArv8fqIooCi4rgg+8NrfLoq6i+jiQUAEVxEBEQSRU85IADkkJBCOhCTkvpPJMVfm/ftjmmaSzExX9THd1f1+zh8+MF3fru/xqar+1qe+BWZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlkgVKIaVSj451EfVYqgW0SHECpXX8VCtEaZalVaiK2RW2W53oHCIIA+DGM8U5jIfvyQ+wNvXMK3OJjXWaAFLGE9bRDLdYXSbYtS6hnNRCYxifVcyvbAmx/Ef7Oa15mvhaxgG4pyW+QPB3paBFDOSKZyBDPZjyFUAvAQ9ytouFZzFMdwCqKRFSzgOf6uN1gfvSEuiFHHBGZwBFPYhzpKgEX0DxHo4/kQpUArG1jMS8zVKyyhKdoHv9xzoKdIAJWM50MczwyGU77bP48LUVR/hgMQox/9OJBPsI1FPMvjeo6VtEdhgAtiDGY6x3MM+1O3W1QOZCjLA5YC4ygFoJyhDOVILmEt/+AJntTrbHe4Wy8SKtW+ukh/0mq1qyuPq0+wX5lCM7SpyzJa9KZu1GkalM+/WIVQP52ga/UP7eyyHq06M3BboJvVtY16TP+mySrP59awAiGEanSSbtBi7VL33tTwwIP7TLX2UFKTXtS3NTUfB7hQicbrX/WUtqknXwu270LV+msP5bRrpX6nMzUg/9rCCoYQGqLz9UiSYS1JGzQt4NBGX0tamrRav9bJ6psvA1wIVehw/UTvdnNN09kNgQN9mBYmLa1Jc3WZRgefyzcLSAiN0GV6qcez7wdadFrgQL8hUIlSox7QmarN/fAWqtKJuk0bAu75w6oK2BpTtT5Qibu0UN/ReAe7ZZQQ+q+Aw7rDvwY5iwlV6eEQpW7Rqbkf2kJTtCzEXi/QkICB/jG1hCj3rmAHEIOSXO9AhDzMlhCfDjrv3o+RIUp9jRdz3QwAvMXfQnx6MEOSf0gAY/e4e9GTVh6iKdcNERUO9EBiAM/wQIhNxlIR6HNDGBy4zFZuZH2u2wKAZmazOfCngx/M9guxD89zr2+3BeVAD66Zm9gU+NOj6BfocyMDfg5gLn/Oh6EdA3iWPwfeoJKxBJmOq2Bs4DJbuIkNuW6J6HCgBxQf3METW4cwKNlH4herlQFLbOFGNua6HVLcm2Bn6lpGBS5xLvfnw0EvKhzoYYQ5i9QHHLTjA3/733ggX4Z2DOA57gu8wbhAv70H0xCwvGZuDHF1ZQ704GIAzwca3M2sZB7tgQrdzFtsCvDZcL+Ke0MrNwWYMRBbWcyqQMnWpbzOe+wM8Mk5+XPQiwa3VQgCOII/dTt9tpPlvMpLzOMd1rCNXbHk5VXSnxEcyDQO4QCGxDO99/Yon2BrPnWXoIwb+Gw3/9zORt7mZV7hdZaxkZ3JBpughD4MZl+mMJ1pjKGmm482cT53evBa1giV6cYu7uhu1hx9VydrhMpSyV6LP5V+gM7TL/W6mvcqf6c+kS9Zcbvt82Fau9e+tmqRfqcLNVX9UkloUcezBEN0jK7SI1rXRebdw+qXX21hBUYIHarVnQZdk17Uf+go9ctEIAqVaJhO10175NI/mA8ZcV3sbelueX3tWqnb9X80JrXD3V6lo2odrK/pKTV2+pYdOivfDnpWcIRK9fP4kFur3+l0Dcz0sIs/HfcFPaHtkqTtOiM/h7bQzPhhr1l/15WalOmHb4RQrU7QL7Qsfm7/i2rysS2swAhN10ot07WaropsBWD88c9/0p1q1J/zdWgLlepnatJD+udsPk4rVKoD9E29oUZ9PD8PelZghMr1MU1SSbaHmxCq1HGanr9DW2i8Pqya7O+hUEyjdUa+HvQsrwmVakAhPQUlVJnaE9tCqK6QAkkIDQi+VKcVKCF0up7Qsfl7zgxdo3JdoYc0IWyN4s/b/07XF8qcthCapIf1RZUWRo0sJULoFC2TtFDHFEKoC5Xra9om6VGNDlcjof76tdrVqv/Jxzn+FNoC7a85kjbpM4V0zWahCKEj9XZ8Br0AQr1TmEvSPcGeAk9s21fXx2/pFUCox8P86cT9Ed+SK07xy7qXOt2fjXio7xHmUrt+GfQiXKhc3+mUqBPxUN8jzCVpqWZFuXctJUJouB7dI+MqwqG+V5h3hOvVKg+0zg26cK9tIxvqXYS5JM3TlKj2rqVIqEa/6iKVNaKh3mWYS1KjPpusPvGZilVdpLJGMtS7CfOO1Nlh0auPpUyoRFd1szpZBEO92zCXpBU9X7IKoQM1r8ttIxjqPYS5JM1WdbTqYykTQh/vYQXTiIV6j2EuSc9rTPf1EeqvP3a7bcRCPUmYS036UpT61lIWP4PNV08W6qhoDIf4+upfS7LS/K3dvTdGqFT/rrYetm3tuK8emdboKcwlaaWOi0ZtLC1CNbpdyczR4CgMBiF0UjevdOp8HvtCV4NbCH0k6ersLbooGqEhVKXfJe3bZ4K+RcciSwhd2sXz3rvbos9HI5dKHZfeN/f4eihJWqIZewer0Gi9kDQwHgybepPT1viYliet0X+rLAr1sRSp48mzpUmGwQ59JRphnqjVwADXKPfueU9dqEw/Sbrd09o3GmEerxP6pNYlqdNmfSw6dbLQhGp0Z5JB0Kqro/UQRPx1Ucne99KiL3Ye3ELoo9qcZKtXdVC0QkIopot2W6iiK8/6RlvBEkIXqCnJELg5ek9vxScYX0lSs3c0abdAb9CcJFu8F8VsMqEyfSfpO/L+09nvBUpoTDf3iz/wqIZHb2jHQ/34pL9OZ7+fJyeEvp7kPahb9akotgUda9LcmqQtVurQaNbOeiQU0zVJOv8tHRzVzhdCF2lHj/XbrFM66ic0Re/2+Nld+l5Up6yE0Kik1yu3O3mm4AihGVqZ5Ax2blTDPF7HSv0syeB+sOOeuMr0iySfvF8DI90W6JgkVzjbdHqU+9u6IFShW5IM7WuDPACSz4RG6tke69jccTmu45LcPV8U3WubRFugy5K8hPlx9Y9yHW0vQqP0fI+dPif6aRRC6GSt76GWLbpOpUJfjq8v27UmXRjtMI+3Ro3u6LHPF2tG1GtpuxGKaZz+XYu6mYDapA9Hf2jHH9fpbiaiWU/qXNXFXxZxqu7tNnH2992lzEaJEJqqxd3UcbX+R9OiOgthPRCKabyu7nIS6rpC6XKhEV1cu7Rojv6v6t8/mMWD/aN6oIvpuyWaVggHvXgtv9zFjba1+oUOiVJSlIUkFNMB+r6W7dbxCzSuUDpdCJ2zW/i26jldsPe6sOq4uD1DD2tnp0+36+uFEebxOg7QY7v19TrdpEML5bBuPRAq0UT9d2JOtrXrRz6iSqhP4rdpm17UxRrcXf3i70H5pP6aSCSaq6EF1RboI9oSr9sG3aLDoz7laiEIlegg/VgrJT2pAYXU9ULoaK1Tu/6hL6kh0AozdfoXPaUWNem8Qjroxe+3/K+kTfqNjnaQFyGhUk3TT3RaYQ3t+FIU39TlwbP84k/BXaBrVVdwbYEO0406Lnuvz7K8J1Sa/Vcr5aReZWFzueOJNAUXDEIlhVgvMzMzMzMzMzMzMzMzMzMzMzMzs2IWy/UOWKYIIEYppZRRRhnl8b8ySniXbbGut6lkHCW00kYrrbTSFv/bhTw8Cod7MmIEUEI5VfShL7X0o456+lFHHf2ooS996UMVFVTGw7yMFs7mb90E+ljuZyit7KKVFlpoppkdbGc729jKlvjfZrayjW3soJkW2j1woqYs1ztgPRFAKVXUUMdABjOEBhoYzEDqqaOGaiqpoDRJ3O3soZ9LqGdgkp3YRQvN7GQ7W9jERtaxWmtZy1o2sIVtNLHLoZ/fHOh5RhCjghoG0MAIRjCKEQxlEPXUUEV5DnYpRhll9KH/Hv9/G01sYzPrWc0K3tNyVrKGjTTSghz2+cWBnnPxi/G+DGA4+zCWsYxmGIOoo5qSXO9dD8qooYahif9uZydbWc8qlrJYS1jKKjay3Wf7fOBAzxFBjD4MYgT7MoHxjGY4A+hDaa73LGUl9KUvw5gCQDvb2cgqlvI2b2kRK1jPDp/pc8WB3oviv7hrGcY49udAxrMPA+mb1+ftVJVQSy2jORxoZwfreY+3eUMLWcwqtvo837sc6L1AHcN+OOOZzGQmMJL+VOR6r3pRCTXUMIZjgBY2sZy3mc9repuVNNLugM8+B3rWCKCSBvZjCtOYyGgG5GQyLb9U0EAD04FWNrKMBfxDr/EOa2j2OT57HOgZJ4jRl1FM4hAOZgJD6ZPrfcpL5TTQwExgJ6t5k3/wshbwHtv8Sz7zHOgZI4hRyximcijT2I9Bbt2AqhnLWE6ljQ28wyu8oFdZQqMDPnM8FNMmgBpGM40jmM5+DCjIybXeUEYDDRxFOxt5h5d4Tq+wlG2+pE+fAz1lAqhgBAdxJIezP4MifGssv5QwiEEczufZwEKe51m9ygpaHPCpc6CnQBCjPwdyBEczjWFFNYPem0oZwhA+RAureJVnmKs32OQL+lQ40EMQQDkjmcGxHMF4anO9R0WigtGM5jQaeZu5PKUXWU6rz+9hONADEUAfxnM0s5jOCN8my4laDuEQLmIlL/IEf9Nb7HC4B+NAT0IAdUzmOGYxlYEeVzlXzmhGcyYbmMfjPKn5bHG4J+NA71b8l/hUTmQWk+iX6/2x3cQYxPEcz1Ze5wke0yts9q/37jnQuyCA/hzMyRzPRPrmen+sB/04nMO5jNd5nEf0Cpt8du+KA303AujHVE7lJId4hPRlJjP5Eq/zKA/pVbY63HfnQI8TQDUTOZVTmer59EjqCPdLeZWHeFgL2Olwf5/boSPEy9iXE/kYM5Msq5SvRBtt8RXfmmiiiZ3x/22mhW38lHe6WTNuEF+hgQoqqYr/VVNFFZVUUkEZZREdIxv4O/fzGItp8zAv+hYQxBjMMZzOsYyIROqqaGUn22lkMxvZyAY2solNbKaRbexgJ0200Eobu9hFO0q2mmt89dgYJfEVZMupoIpq+lBDLXX0ZwADGMgABlBPLX2ppjwSI6edFTzFvTzDumKfqCva2scv1adyGv/EAXmc29ZOM41sYh2rWcVKVrGW9Wymke0009obizLHDwXlVNKXWuoZxBCGMZxhDGUw/amlMo8Pki0s5AHu49VivpQvynoLShjJSZzF4XsteZh7ooktrGMFy1jCeyxnDZtozK+1VhPr09bSnwZGsA9j2IfhDKGOqrzZzQ9s4jnu5lGWF+dCF0VW53iG2yGcxUcYl0cPoYidbGQlS1jEOyxhBRuitZpqfPXaWgYynDHsx36MYTgDqM6jMbaLRfyFu3m5+DLqiqi2ghjDOIlzOJK6XO8NAG1sZRXv8iYLeYf3WM+2fDprpyp+tq9hECMZzwFMYF+G0S9P7vFs4Vnu4FFWRecwmr6iqGn8YZRJnMUZ7J/z4baLzazgLRawgLdZyaZCfkAj3vb9Gc54JjGJCYygPufXUm28yT3czYJCbvvOCr6OAqjlaP6Fk2jI6Y7sYCVvMY9XeZPlbC622z7x25j1jGR/pnIQExhOn5w2wRoe5XfMobHwe6Kg6yeAoXyE8zg8Z+u2tbOJd3mNl5jHYtZ5+YTEkh2D2ZeDmM4UxtI/Z7P2O3iO2/gLqwu7Xwq2boISxvEJzmViTi7Wd7GBt3mZv/MaS9hanHO9yQhK6McYpjCTQxjPwJxc1LfxOr/nDywq3F4qyHoJyjiI8ziT0b1ew3Y28TYv8hyvsjQfVjQVlDKx26fvmnmN5jzYxxg1jGYqhzOD8Tk4w4ul/JHbmEdbrlsjGwqsTvG11A/l03yUIb385dt4lxf5Gy+xOJ9WMBX05V6Opq2LfyxhKafwXh7ta4xa9mU6RzGDsdT08g6s5X5+zQuFt8Z8AdUmnut2DBdwCvW9+MVtrOZV5vAsb7Ah/y7+BDU8xFHd/PNSjmVpHu5zCQM5kCM5mqkM7dUfX5t5mJuZU1h5dAVSEwH05Tg+xwm9+OTZDt7hOZ7kRZbl7zkgioGe2HOoZB9mcByHs18vTqg28ldu4im252uvhlUAtYgH+SwuZlYvPUEuNvMaT/EU8/LxHL5X+0Q00DvVoISBHMSxHMdk6ntp1G7nCWbzRGEEe8RrEL9cn8XnOb5XgryddbzMYzzNwqi8WCD6gZ6oB9SyPx/iRA5hcK9M123ncX7Bk4V1GR8xQqhSJ+puNSr7dmml7tUlmqwqdQy6iBCq0Zxu67VEoyNWG1SlybpE92qldvVCzzfqbp2gymj1esEQKtMR+q02Z72j27VKf9IXNDGanV1YgZ6oE6rURH1Bf9IqtWd9DGzWb3SEyqLXUpEmFNNk/Uzrsh7i6/WgLtWkaIZ4orUKLtATNUOVmqRL9aDWZz3c1+mnmqxYVFsrYoTQKP27lmW5Wxs1R1dpuqqjG+KJFivQQE/UD1Vruq7SnKz/iFuq72hU1EdE3hNCdbpQ87J69G7RfF2rWaorjA4t9EBP1BLVaZau1Xy1ZHF0tGuePlcoYyMvCZXrJD2cxW5s10rdrnM0rJAu0Ioj0BN1jWmYztHtWpnFk0GzHtaJKi+cdssbQmicrtemrHXedj2rKzRZ5YV2rC6mQI/XF5Vrsq7Qs9qetfGySddr30IbKzklhProfC3IUpe1a5lu1odVX5jdVmyBnqg1qteHdbOWZe3cPl/nq09hjppeJxTTwbpDO7PSVTs1V5drf5UWbmcVZ6An6l6q/fVVzc3a+Pm9phXSD72cEEID9NUszbCv1e36uPoX+hG5mAM9Xn/UXx/X7VqblXG0VF/VgEIfRVkkVKpZelStGe+aNi3UNTpEFcXQPcUe6PE2QBU6RNdoodoyPp5a9ahmFfJVYRYJDdMPtD7jnbJTc3SJ9imeyy0HeqeWiGmULtEzWbiQX68faFixtGQGCZ2S8fSHzbpXZxbqpFsPLelA79waqF5n6p6MJ0836pRiaskMEeqjOzLYDWt0s46Nfp5bSi3pQN+zRVCVjtXNWp3BEXaH+hRbS2aAEDoiIx3RrqX6kQ4p1kcSHOjdtkuZDtaPtDQjt99W64h8Ponk8UO2ghK+x5VpFrKY27mNt2gHoB/TmEJ/NjGPfxTDet4gqOAzjOlyFMbYyE1sLvxW6JqghAmcx7mMS3Mo/ICr8n0JkrwlNFavpXEmf1Pf1LiOaTehEp2iRxO/+7fqIZ2gkvw9BlvvEIppX31TC9M4s7+msR5JKRNCF6WU296uN/UNjXl/bl0ops/u9VjrGn2qeGbfrXtCMY3RN1IM9hZdlM+X7REgVK+HQjb7Lr2tb2nsByEshE7Qmi4+u1ZnuYsMEsH+Tb0Vet2ah1TvMZQWddxm2xSq2d/VjN2DV6iP7uvm00t1okPdOgih6Xo31HjbpFM8gtImVK7ZoRq+WZ/bK9Cna0O3n39DM91RBvFA/6yaQ4232X5gNQOE0GQtDtX0e0yNCP1Lj5djL+hAh7qB0BjNCzXWFmtyFMZOrt5hGVgMYD6zQ7XlZC5m90m22h5rOpPr2YcIdJdlkyDGxUwJtcls5hfDTdpeIdSguaGOs6t0+AfHWaFPJn2U4Q8a7EAvZkLocK0KNc7mqsGjJmOE0NkhVwu5Q9WdAn2iViT5fLt+qX7utOIlVK3fhxpj23V2FC7bIySFzPdOnSBUpl8l3aJVP1SVu604qeO6L+zJxNntmZVS5vuz719WCaEpejPpFk36erFmxBc7oQY9G2p85Xl2e0QJlej7oTpil67sdE5HZwd4MHGrLnauXPERQleETJT5vhOosyKFzPfFmtzpd3qpvhNgdZH1/t1VfIQmaVGoseXs9mxJKfP9hg+SGYTqdHuAbd7TyQ71YiJUrhtCjStnt2dTCpnvmz4I2vja8C8E2OrNzjfnrLAJoZNDplk7uz2bUsp879QlQmhW0httkvSiJjnUi4NQnR4Mefpwdnt2pZD5vttFVvzyf0eA7R7XaHdm4RNCF4b8Qejs9mxLP/NdqFLXBXrq+B4NcagXusLNbo84IXRlyOUBvt/5lpnQYP0lwFbt+pXq3KGFTCima0KNpfYPbtpaVmUg8x1N0esBtmvTtR8k0kaVOq5iqrv5qyrevIFiym6P4GM3AjibW+gTYqM7+TQ7Y51L+Dg3MzDpds38Jz+kNYLNlCCo5r84KL485u5irOYy1kS5fqkTVHML54TYZAef4c5Ihk0UpZf5Hi+hRFcEmoJp1CXRzoDycs/dtouz2/NbepnviTL66pZAW27QP0f5V5kDvdt2cXZ7vksp8/2KPc7paJSeCbTtcn04uh3sQO+mVZzdHgUpZb5P2uOcjo7QkkDbvqUjoxrqDvRuWsXZ7VGQbuZ7ooz/G/BVji9rSjRD3YHeZZs4uz0q0st8T5RRru8FvIB7SmOj2NUO9C5axNnt0ZFi5vseKTBC/fXHgFv/SUOjF+oO9C5axNntUZJS5vuFe53T0f56JeD2v47ecd2Bvld7OLs9WlLMfB+jvUs5OeDNujb9OGp3Uh3oe7VHEWa35/267j3JzJrvMYBH+S5NAbYu5Qtcjo/ukeW12yMq3cz3RCnV+nnA7bfp0ijdT/UZfbe2KJrs9gKT0prvv9/7URWhYXos4PYbdV50LuUc6Lu1hdduj6qUMt8/2cU5HR2itwKWsFL/FJXud6B3aglnt0dXJjLfE+V8MvDtund0dDRC3YHeqSWKNrs90pNxHWIAz3NrqI0O4/w9X6oYA/gjP6ItUAnj+ClT/WLG6BDA+RwWaqNbed7TcHkk/cz3RDn9dFvgMp7RuPw/3vuMnmgHZ7dHXSYy3xPljNXzgcv4s4ble6g70OOt4Oz2QpCJzPd4OehYLQ9cym/VP78HgwPd2e0FJDOZ74mSPhd4bnaXrlfffB4QDnRnt0NZrncgU2IIHudOLgqx0fGczU3aY7IlhuB/OZCvBJqFKeFiNvJdteTxlE07i6hnV5d7v4KWXO9etsVXGTwh1EZ38rin4fJSZjLfE2UN0p8Dl7JdX1Zpvh79hWLqp4Ea0MXfQNVHKcsv5RYowuz2ApbSmu/XdLXccfygMT/Ehd6nPDDyk9duL0CZyXyPl4Q+pnUhyjnNgyP/OLu9IGUq8z1eVokuV3PgchbrQw71fOPs9gKVmcz3RFl99csQJc3TwR4i+cTZ7QUrU5nvibJG6qkQJf1N4x3q+aOYs9sLXvprvu9WFjos1Ez+gxrhgZIfvHZ7gctU5nu8LHSetoYo63YN8FDJB0KT0nnFtuW5TGW+J0or09VqC1zSLv1cNR4uuebs9iKQqcz3TqX9IdSAuVqVHjC55Oz2opC5zPdEaRP0coiydujf8jdXrhgI1YU+1BdUdnuRyMSa77uVhk4KlXaxWZ/pKufOeoPXbi8amcx8T5T3Re0MUdoane4zRG4IjQk9Hevs9mjKXOZ7orwq/TRUaUs0y4On9zm7vchkLvO9U3mPhCpvgaZ7APUuZ7cXnUxmvifKO1hvhirvOe3vUO9Nzm4vQpnMfI+Xh87SxlAlPqyRHka9xdntRSmTme+JEkv1DbWGHEgDPZB6h7Pbi1QmM98TJdbqN6FKbNcNqvVQyj5ntxexTGa+x8tDY0JO8rXqGufKZZ+z27tTBKvfCeAifkp5iI1mcymtsZ5KPIbbGBWixCa+zXW09X6DC8o5nZG0d/GPMbZyF42FMQwE5VzPxSE2aeVL3FgUYVAMMpv5Hi8RXaBtocrcos/lIleuWJZ7dnZ70cts5nuizAr9MOSvwbU6q/enfYoo0J3dXuwym/meKHOg7gtVprRUJ/T20CqOQHd2u5H5zPdEmRNDTvNJr2tm74Z60QS6s9t7UACvTQ4iBjCf2aH6dTIX08Nv6hjA61zJulC7ciA/4wC/bjmzBDEuZnKoTWYz39NwBSjTme/xMmP6SogloTs8pn1671xS+Gd0Z7dbJ5nOfE+U2kc3hgx06Q8a7EDPYA2d3W4fyHTme6LUEXoyZKC36yb1652BVuiB7ux220PmM98TpR6qRSFDvVU/VFVvDLYiCHRntydVJJNxHWIAz3NrqI0O4/yep85iAC/wTbaGKreMy/hXyopruGWeAM7nsFAb3crznoYrcJnOfE+UWqb/F2JJ6A5bdVH2c+UK+4zu7HbrUmbXfN+t3DrdGTLQpXXZnxQq5ED32u3WrcxnvsdLRfvpxdCh/l7ystOub4EGurPbrQcpZb4/2HPme6LcE7QydKgv1GHZDPWCDnRnt1v3spH5Hi8XfV47Qof6i5qYveFXqIHu7HZLIqXM93k9Z74nSq7UT0IuMS1Jj2t0tkK9gAPd2e2BFdXttfellPk+pefM90TJzXyXR0Lv0ix+zBBnwAfn7HYLJBuZ7/Fy0VS9Efqc3q5fJZ8HSLGmBXdGd3a7BZSdzPdEyWdoQ+hQb9O1QcpPoaaFGOjObrdgspP5Hi+5RF8POU0kSU36RuYni4Rq9LSkti7+2rVY+0Rt+Du7Pbwi/sEigMO5h6EhNprLGaxJ3miCGn7Gp0Lv1DauYDbtmewWQRlHM6jLI1SM7TzFjmgNA0ED93BEiE3WcAZzi3q4FzOhWGbXfO9UMhqtv4U+p0sbdK4vMXvitdsttBQy3xclz3yPl4yO0tIUQn25TnWod8/Z7RZatjLfE2V/Wo0phPpbOtKh3jVnt1tKspP5nii7XN8PeZHZ4eXiTe3oibPbLUUpDZ0Ame+J0gfo3hQCXXpSYx3qe3J2u6UspYvBAJnv8bLRgXo1pVD/k4Z6iHbm7HZLS7Yy3+Nlo1O1JqVQ/7UvOjtzdrulRQhdGfK39DVB14YRiunLakoh0Nt0XXGneXQmFNM1odqvXVc6zK2TFBYYDJT5nii9OuSPg/c169u+9ARnt6fLqUJAPEvubG6hT4iN7uAz7AzWgILh/JZZKezadr7Oz4PnyglilFJBJVVUU001VfShkkoqKKeUEsqANtrZRQsttNDETprYyQ6aaKKZFnZ1FJNPBNXcwjkhNtnBZ7gz3+qRK26FOEE1t3J2iE128GnuCtaEApjB7xmXwq5t4lJu6/p7BDHK6UsdAxnEEBoYwiAGUk8tNVRTSQVllFFCCSXsXogQop122miLB/wOtrKZjaxjLWtZyzo2soXttKBcDhUBfJJbQx2I7+QzUUvuzR63Q1w2M98T5Z/DbOpS2LlVXMgDHZ0lgDJqGcQw9mEMoxlJAwPpRzUVGe1P0coOGtnAGpazjCUsYyXraaS1tweOs9vTVZbrHcgXMQTP82uuDLHRYZzPDxVoMMUQ/IED+BaloXduGD9hKy+pgX3Yj/0Zzz4MpZ6qrC4cEqOCCuoZFf9vsZMtrGEpi1iod1jGWrb1xpnea7enzy3RiWAs94VatWQxp7EgxO/nOm7g3JR2bjEr2YdBVOdFn4kmNrCMN1nAfN5hNTuyF/KCSdzP2BCbzOc03s2HhrI8lM3M90T54/RCSvPv+atJ7+lp/Uyf1aEarNJM39BydrtlXDYz3+Plo1lakevYzIp2bdY83aYv62g1ZCrgnd1uWZDdzPfEN1yUwpLQ0dGuRs3Xb3WJZqo+3VdOObvdsiKbme+Jb6jUdSksCR017dqo5/UTnaWxKk8t9JzdblmTzcz3xDcM1P25jsNe06Ilultf0jT1DRvuzm7PlKJc1z2p+cymPcTnA6353kEIatmX1aG+IcrKGc2Z/A+Pch/f4Ej1C5467LXbM8Ut0oUU0jNWcwbP9dycAqhlMidyElOoz3Utc2QL83mMR3mNrQHaK2wK03OcHjSFyYpeptd8V8djLYfo63pSm3N9JZ0XtuhpXaUZqu7+7O612y3rhKozs+a7UJn20+f1gNYXwQRcOBv0oC7RBJXt3XJeuz2zfJXTpUxkvgtgEEdxBrMY6dmQbrSzgie4hzms7zwcnd1uvSKdNd+FUIWm6tt6MaUFJ4pPk17SdzRNFZ1a0Gu3Z5APf91KNfMdGMCxnMMshuS6DhGzlie4g6fYiLPbrbekmPk+QV/Rcz6Pp6xJz+nftL9mh9rK2e1J+BDYA0E9v+eUEJtsZxPD/Xs8Te2sop6+IbZ4mHPZ7MHcPbdNDwRwMncU7T3vqNjMuTzswdwTn3t6EAN4gjtyvR8Z1bF4VGFd5d7J4w7znrl1khBM5r5Q00K51UYzO9hGI1vZylYaaWR7fOHHVtrYxS6glFLKKKeKKvrQl1pq6Uc/+sXXmquK0NpD73Ka016TiU535s58ZvO9CFz7/IN7WcUa1rOJRnbEA7s9eQgIoCQe+H2opT+DaGA4IxjOUAZTT58UFsDqHc5uD8Ttk1QKqRu58S7n80zmujSxwmx/GhjFvoxjX0YxhJq8CnpntwfiFkoqpTXfc2M+5/NydjpVEKOK/oxgHBOZyHhGUJ/zkPfa7QG5hQJIYc33XJnLp3kru90aX3C6npEcwDSmMoFhVOeovl67PSC3UQApZb7nysN8lhW907ECqKSBCRzCTKYwqpevepzdHpjbKBBBjGtCrfmeuha2UZ/G5N8dfJENvdmx8XP8YA7gMI7gIIZT0Stf/AOuCv6yquLmVgoohcz38F+xlYU8y1Os5bqQryvorJ0b+Rrber9rBVDBcKZxDEdyAHVZHV/ObrfMSynzPahdWqUHdLkOU51iQuhYLU+jvFZ9V5W5y4kRiqlOh+mrekArQz6D5ux2y60U1nxPrk3v6S5dpImq+mDYCqHPhVx0YXc7dLlKcxsGQqhKB+pC3aVlastwy3ntdsuOlNZ8794urdAfdIHGd7UUslCFrk1rRZotuiDdNdUz1mrlGq8LdJeWZ+zs7rXbLXtSWPO9axv0oL6oA99fZqGb7xqkP6f1LWt1Zr4EQzzcD9Al+ovWZ6AFvXa7ZVMKa77vbqde0Hd6XhQx8U1osuanFQ5LdHy+hHqiTtWaoW/rBe1Mo15eu92ySwhdmdIFaLve0y36qAYEX9Vc6GNal1aoL9CMfAsJITRAH9Wv9F5KP07adWW+1ckKjlCDng05NHdqri7XASoL/Z6SEl2u5rRC/Xntn49hIVSm/fVVzQ19bp+rhvyrjxWY0Gu+r9cdOl39U373WF/9Mq1Alx7RqHwM9Xhb9tfHdUeI3+1eu916R+A139v1rn6kmT1NuQX4LjRST6UZ6ndpUL6GRnzF3Jn6kd4NdCHvtdutdwihw7Wqx+HYptd0lcanvwCxEDosrQlAqV03qjafw0OoRON1leYnud++Wkf4fG69JMma7216WZdpRKYGpBA6T1vTCvVWfV9V+R0gQmiELtPLPQS712633iQ0tsvX+e7SPH1JDZk96wiV6eo0c8t26sqwk4E5aVc0VJfqtS7vbLymsfleAyso3WS+v6tvamQ2Li2F6nVXWoEubdWF+ZArF6htR+lbeneP/Xd2u/W+vTLf1+g6HZCtQBJCE/RymqG+Tp+IRqgIxXSgfqw1nfbe2e3W+3bLfN+i/9Wh2X2IRAidmGQKMLllOikaoQ5CpTpMv9EWSc5ut1wRKtdsNet+nazK7A9CIfTFtFJHJWmhDo1KwAihSp2iP6vZ2e2WM0Lj9XHV9FbgCFXp+jQDXfq7JkYl1OPBXqvTNT46+2yWJqEGPZJ2qP9Vox02ZnlLCE3Tm2mH+t0a7FA3y1tC6CxtTDPQ23Wz+jnQzfKWUImuUmuaod6m/1K1Q90sbwnV6jdpX7436ar8z5UzK1pCaIzmph3qjfq8c8fN8pYQOkbL0g719TrHk3JmeUsIXaBtaYf6cmecmeUxoQr9MAMLKL/lZ7zN8pjQQN2XdqBLL3lVVbO8JYQmdvlcfFhPaIxD3SxPCaGPaG0GQv2e/F1XzqzoCcX0lTSXhJakdl3tW21meUuoj27MwDl9jY705btZ3hIaoScyEOq/cqacWd4SQodqUdqBvkITHehmeUsI/XN80aV0fqd7+cUCVZLrHbBMiAHcxY/ZlWYxM3NdE8sOB3qBiEEbP+LuNIvZl+pc18SywYFeSLbwDV5Kq4R6KnNdCcsGB3rBiAG8wxWsSqOQUo+IwuRuLSAxgMf5D3amXMQ2WnJdC8sGB3pBiQHcwk0pT52vSOMgYXnMgV5gYtDMd3kkxc3npTlvb2a9QwhN1Rsp3EffquN8F90sIoTQ6doQOtAf9xLQZhEiVKKv7/Va554163znxZlFilCNfh0q0O9XncPcLFKE0D4hnmlbpBk+n5tFjhCapL8HCvPVOsNhbhZJQuggPZ00zBfrDMUc5mYRJYRG6efa2m2Qt+gvmumzuVnECVXqw7q3izewbtccfVb1DvPCF8v1Dlj2CaCaKRzLdEbTjxjbWcmrPM2LbPYgKAbu46IhgFL6UE2MJnbQ6u43MzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzM7Ni8/8BqVP1t6YkHSsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDUtMTlUMTg6MzA6NDErMDQ6MDBD9JMrAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA1LTE5VDE4OjMwOjIzKzA0OjAwY1kzOQAAAABJRU5ErkJggg==')"
             class="icon-circle"
             v-touch-class="'active'"
             v-touch:start="()=> {water(true)}"
             v-touch:end="()=> {water(false)}">
        </div>

        <div
                id="horn"
                class="icon-circle"
                v-touch-class="'active'"
                v-touch:start="()=> {horn(true)}"
                v-touch:end="()=> {horn(false)}"
        >
            <i class="fas fa-bullhorn"></i>
        </div>

        <div
                id="engine"
                class="icon-circle tap"
                v-bind:class="{'turned-on': this.engineOn}"
                v-touch:tap="()=> {engine()}"
        >
            <i class="fas fa-power-off"></i>
        </div>


        <div
                id="assistant"
                class="icon-circle"
                v-touch-class="'recording'"
                v-touch:start="()=> {assistant(true)}"
                v-touch:end="()=> {assistant(false)}"
        >
            <i class="fas fa-microphone"></i>
        </div>

        <div
                id="lock"
                class="icon-circle"
                v-touch:tap="()=> {lockdoors()}"
        >
            <i v-if="this.doorsLocked" class="fas fa-lock" ></i>
            <i v-else class="fas fa-lock-open" ></i>
        </div>





        <!--WindowLeft-->

        <div id="window_left">
            <div
                    id="front_left_UPWARD"
                    class="icon-circle half"
                    v-touch:start="()=> {window('front_left', 'up')}"
                    v-touch:end="()=> {window('front_left', 'stop')}"
            >
                <i class="fas fa-level-up-alt"></i>
            </div>

            <div
                    id="front_left_DOWNWARD"
                    class="icon-circle half"
                    v-touch:start="()=> {window('front_left', 'down')}"
                    v-touch:end="()=> {window('front_left', 'stop')}"
            >
                <i class="fas fa-level-down-alt"></i>
            </div>


        </div>

        <div id="window_right">
            <div
                    id="front_right_UPWARD"
                    class="icon-circle half"
                    v-touch:start="()=> {window('front_right', 'up')}"
                    v-touch:end="()=> {window('front_right', 'stop')}"
            >
                <i class="fas fa-level-up-alt fa-flip-horizontal"></i>
            </div>

            <div
                    id="front_right_DOWNWARD"
                    class="icon-circle half"
                    v-touch:start="()=> {window('front_right', 'down')}"
                    v-touch:end="()=> {window('front_right', 'stop')}"
            >
                <i class="fas fa-level-down-alt fa-flip-horizontal"></i>
            </div>


        </div>

        <div id="display">
            <v-text-field
                    dark
                    label="Display Text"
                    outline
                    v-model="display"
                    @input="textChanged"
            ></v-text-field>
        </div>

    </div>
</template>

<script>
    import "vue2-touch-events"
    import * as CarService from "./services/CarService";
    import {mapGetters} from "vuex";
    import {BlobToBase64} from "./services/CarService";


    let audioData, recorder;

    export default {
        name: 'app',
        data: ()=>{
            return {
                engineStarting: false,
                isRecording: false,
                display:'',
            }
        },
        methods:{
            async water(state){
                await CarService.water(state);
            },
            async horn(state){
                await CarService.horn(state);
            },
            async engine(){
                if(this.engineStarting) return;

                try{
                    this.engineStarting = true;
                    let engineStatusRequest = await CarService.engineStart(!this.engineOn);
                    let engineStatus = engineStatusRequest.data.status;
                    this.$store.dispatch('engineStatus', engineStatus);
                }finally {
                    this.engineStarting = false;
                }
            },
            async assistant(state){
                // Ask permission

                if(state){
                    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
                        recorder = new MediaRecorder(stream);

                        // Set record to <audio> when recording will be finished
                        recorder.addEventListener('dataavailable', async e => {
                            const base64Audio = await BlobToBase64(e.data);
                            const assistantResponse = await CarService.assistant(base64Audio);
                            let state = assistantResponse.data.state;

                            if(state.lock)
                                this.$store.dispatch('lockStatus', state.lock);

                            if(state.engine)
                                this.$store.dispatch('engineStatus', state.engine);




                            console.log('Sent')
                        });

                        // Start recording
                        recorder.start();
                        console.log('recording')
                    });

                }else{
                    console.log('recording click finish')
                    //Finish recording  & Send data
                    recorder.stop();
                    // Remove “recording” icon from browser tab
                    recorder.stream.getTracks().forEach(i => i.stop())

                }

            },
            async lockdoors(){
                console.log(this.doorsLocked);

                try{
                    const lockStatusRequest = await CarService.lockDoors(!this.doorsLocked);
                    let lockStatus = lockStatusRequest.data.status;
                    console.log(lockStatus );
                    console.log('-----------------');

                    this.$store.dispatch('lockStatus', lockStatus);
                }catch (e) {
                    //  :)
                }
            },
            async window(position, state){
                await CarService.windowControll(position, state);
            },
            async textChanged(){
                if(this.display)
                    CarService.display(this.display);
            }
        },
        computed:{
            ...mapGetters([
                'doorsLocked',
                'engineOn',
            ])
        }
    }
</script>


<style scoped lang="scss">
    $primary-color: rgba(21, 101, 192,.7);
    $bg1: #1a242f;
    $bg2: rgba(21, 101, 192,.3);
    $bg3: rgba(21, 101, 192,.6);
    $borderColor: rgba(0, 131, 143,1.0);
    $text: #efefef;
    $icon-size: 200px;
    $assistant-color: rgba(106, 27, 154,1.0);
    $lock-color: rgba(255, 143, 0,1.0);


    @keyframes aniamteBoxShadow {
        from {
            box-shadow: 0 0 10px 4px $assistant-color;
        }
        to {
            box-shadow: 0 0 40px 13px $assistant-color;
        }
    }


    #engine{
        &.turned-on{
            background: #388e3c;
        }

        background: rgba(198, 40, 40,1.0);
        position: absolute;
        top: 5%;
        left: calc(50% - #{$icon-size/2} );
        box-shadow: 0 0 0 0;
    }

    #lock{
        position: absolute;
        top: 65%;
        left: calc(50% - #{$icon-size/2} );
        background: $lock-color;
    }

    #window_left{
        position: absolute;
        left: 1%;
        top: calc(50% - 100px);
    }
    #window_right{
        position: absolute;
        right: 1%;
        top: calc(50% - 100px);
    }

    .icon-circle{
        transition: all .3s;

        &.tap{
            box-shadow: 0px 0px 7px 1px $text;
        }

        &.active{
            border-color: $borderColor;
            &.tap{
                box-shadow: 0px 0px 7px 1px $borderColor;
            }
        }

        i{
            margin-top: 30px; font-size: 9em
        }
        background: $primary-color;
        border-radius: 50%;

        &.half{
            i{
                margin-top: 15px;
                margin-right: 3px;
                font-size: 4.5em;
            }
            width: $icon-size/2;
            height: $icon-size/2;
        }
        width: $icon-size;
        height: $icon-size;
        border: solid 3px $text;
    }

    #water{
        position: absolute;
        right: 15%;
        top: 2%;
        background-size: contain !important;
        background-color: $primary-color !important;
    }

    #horn{
        position: absolute;
        left: 15%;
        top: 2%;
    }

    #assistant{
        position: absolute;
        top: 35%;
        left: calc(50% - #{$icon-size/2} );
        background: $assistant-color;


        &.recording{
            animation: aniamteBoxShadow 2s infinite alternate;
        }

    }

    #display{
        position: absolute;
        right: 15%;
        bottom: 30%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, $bg1, $bg2, $bg3);
        color: $text;
    }



</style>
