import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, FlatList, Image, Scrollview} from 'react-native'
import background from '../../assets/bg.jpg'
import CardConversation from '../../components/conversations'

const DATA = [
    {
      id: '1',
      avatar: 'https://d181w3hxxigzvh.cloudfront.net/wp-content/uploads/2017/09/Ornn_Splash_Tile_0.jpg',
      name: 'Ornn',
      msng: 'Você me parece merecer isso, não me decepcione.'
    },
    {
      id: '2',
      avatar: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_16.jpg',
      name: 'Malphite',
      msng: 'URRRRHGHHHHHH.'
    },
    {
      id: '3',
      avatar: 'https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2019/07/legiao_y4a5qBzRwTXeLMpEF0QYldtIJ19i6cgHNsjbPOfK_v.jpg.jpeg',
      name: 'Pantheon',
      msng: 'É pão mermo...'
    },
    {
      id: '4',
      avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhIVFRUXFxUYFRcYFRUYFRcWGBUWGBYXGBUYHiggGBolHhcVITEiJSkrLi4uFx8zODMtNygtLysBCgoKDg0OGxAQGy8lICUtLTA1MC0tLS0tLS0tLS0tLy0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xABKEAACAQIEAgYGBQkHAwQDAQABAgMAEQQSITEFQQYTUWFxgSIyQlKRoSNicpKxFDNTc4KissHRBzRDg5PC8GOz4SR00vEXNaMW/8QAGwEAAgMBAQEAAAAAAAAAAAAAAwUBAgQGAAf/xAAzEQACAgEDAwEFBwQDAQAAAAABAgADEQQSIQUxQVETIjJxkRQzYYGxwdEjUqHwNELxBv/aAAwDAQACEQMRAD8A0zoCLEAgjbkRVeJ5IdrunLm6931x8/GrWLw3UG/+Ef8A+fcfqfh4bctWsjEZKwI9RL2C4ori4IPhyPYRyNXxKLXvpWblwwJzC6t7y6Hz7R3Gm42QkLFf1/W5egLZvjoPM1YPjvB/ZhYwC+YSj48hN2RljPqybi3awGqg737N7USzgi4IIOxGxoCKZC7Qm8eqe1Hy7ynunu2PzryXc8zVqOmDGau/p6w6xqPrWGzEeBIqGLGo65lbT4EHmCDse6rEOPK8lYd4/nWnPHETMpHBEgfEN7zfeNRnFuPbb7xokOMJzS3hY008Xi7D8B/WvAn+2DOfSUV4nIPav4gVIvGj7Sg+BtUsnFo/cJ8lqlNj4z/gj42/AVcKD3WVIz4hCLikbc8p7/61zH4cSppa/snv/pQSeWM7IVPc1x8DVaOdlN1Yjwq4q8jiDK+kadDY786V6WInLHMbX52599RZq0ASDHsaFYwWaiJaqGPGxqlq+7IrOGjeByWRk9x2HkTmX5MKI5qDcNa0rj3lRvMXU/7aKFqJXysHePeMeWrmeoWauZ6IBMxksktgWPIE/AXqPg4IgiB3yLfxtc1U4o/0ZTm5CD9o2PwGY+VXkavYlD8MmeP0lkU5ZFvlbuO6sPaU8x3A6EA1oMBi+sBuMrjR13sdwQeakag/zuKzqvRMgoSw1eIZhb/FgOrLbmR6y99xzNYNbQGG4d4w6Z1A0Psc+6f8QzXK5G4YBgbggEEbEHY12k066KlSpVEmX5oCPWU/DSgeI4Wyaw2y84ybD9g+z4beFbGLiCHfTx2+NNmhhfW4HeCB8q2e0PZhOcS5kmESZScpur+6ws3l2jvFxUEXpSO/ZZB4Lv8AvE/CtTxXBR5GLlHUAk3tpbW9v6Vl8CmWNRsbXPidTv3mq2AY4jvpzCwlvT95YrlcvXL0KN8SjjsLrnUXPtLcjMO0EbMO3y8IkjUgMjyWP12/BibUSJoVjPomzewx9L6re94dvxoiPjgzJq9PuG5e/wCs46N+ml+8P6Uwhv0sn3h/SpXqFjWoZicmcLSfpn+CH/bXDiZhs6n7SfzUj8KaxqJmq4YwZA9JIeKOPXj07UOb93Q/jVqDGK4upvQwmqswKHrF/bA9odo+sPnRFtYQTVK3biaEtXC1VMLiAw3v/MVPetikEZmBxg4j71Xxnq1KTUGIOh8KlhxBDvB2Ha0yd6uP4T/I0VLUEzfSRfaI/cb+lFGeq09p68ciOL1zNUeaquOxfVrfc7KO1jsKOeBmZsZOBO9bnnA5Ri/7bC3yW/36JBqAcO9EgE3JuWPax1JoyrVSttwlblwcSwGozhsR9HHLzibK32G/+6ABqK8JOZJk7UuPEf8ABUWrxMhhbhtkaSDlGQU/Vvdk8gc6juSr1CsPJ9Jh3/SQujd7IVZfl1tFa57UJtsIncdNuNumVj37fSKlSpUGb5pJeHIdtD3bfCqM+Ey+2vmbUYuCN/hQDimAbKy3NmDDMOVxbXvrTUxJxmcwpycEwRxJ5JIX6uFyrAgMCtyp0LBb3ItfvPZQtJARcHStAnGVjAE4MR9UGxMbED2WG22zWoHxQKGaeJleFz6RU3CPaxzAbA737Sb71jGosL7bRidJ08qnugcHzIy1NLVGXrmatEbBZJmpkyBgQedNzUs1RJxBOCw2pj6x1I1XUMCvZZuzbTup8sMq7gOO1dG+6dPnTce2Vs43VgR330I87kUUkbmdq36XFic9xOd6khptyOxgQTA6A68wdGHkaaauToJtETN2Obqo8G3PlTsPwXT6SRn7h6I+Wp+NRZYiHGcz1OjttGcY+cGPKoNr69g1PwGtNdiLXRwCbAlSBfs11rTQYVEFlUL4ACg/HZbyInugufE+iv8Au+FCW8swAE0W6BKqi7HJEGcPfKWX3W0+ydR+JHlRkNQXJZy3aAPME/1q4uJstMKW28GIb13HIlxpAKhnk0PhQ6WcmmLPodbii+1B4mf2XmRSN9JF9v8A2NRa9B95Ih9Yn4I39aKSOALk2A3q9HYyl/iKaUKCSbAak0FMhkbrG0GyDsB9o95+Q86U8xlNzpGNVHvH3j3dg86RNUts3cCQibRz3k+GPpCiytQrBjWiQNFoHEyXnmTZqKcAf02+w38qDXohwiSxc9kb/wAqLYPdMyGFMI/oYTunceRgmP8ASj9Z3h49HCD/AK0reSwyr+LCtFXP6773/fWdd0MH7N+ZipUqVY44k6YSYC4xFm7oxk+F8371OTiUyEJKbE+qd0fwJ1B+qfnWQixbL+bTEIOxWUL5KzWHwqyMfiGUrIA6HcOyrIDyKtGLAjcd/OpUXo2SQwit6a2GO0n6WYj0odvWY6C2y22H2qHLIytnjIDWsb6q491xzH4VDxBXkygOM4vlWS0bG+631Rye4jwqsk5Q5JFKN2MLHy94d4q1liO20/SOunIop9mZZaRQCyCyAgOh3hJ215xnkeX4PL6VXkvfMpAYAjXUMp3VhzU1FFKBoLhTcAE3KMBcxk89NQeY8KGpKHa3bwf2MYKpU4Muh7613NQjAT2uDtmb8b/zqXF42wsupOg/52UTcMQmJFip/TQAFiWvlG5tqPAXtrRKPC5tZTmPJfYHl7R7z8qr8NwwUZjqx3PP/wACiCmrK7BdviZ2oRn9oRz+kmFOFRqaeKrLGdNZSeXPI79rED7K+iPnc+daHimIKROw3ANvtHQfOsthsLH6rM0jAeqLt+4v9KJS4U5MX69WdAgjzUUjgC5NgNzUkkEI0MTr3iORT8QL1WeEAhwTKialD66nkbWu1uw1o+1KQcRR9hbIyeJ2CBpNTdY+zUM/j7q/M0Sk4MpiEkQCPci2ysAFsGA8TrvXEkDAMpuCLg9ooxhj9Av22/hFY/bOzbsxwulqWvYBwZlsEbyMzAr1a2IPJmNz8gNe+op5utN/8PkPf+se7sFEukcaEaXMlh6K3OdQb5WtsveaGOz84pB5KfkpJppVqQyYPE53V6FqrPd5Hj8ImNNpqzKTYHXsOjfdOtTwQ3PdRlG48Rc5295awaaX7as3pii1dvTFFwMRc7ZOY+9TQS2Dd4t8wT+HzqtepISt7ubIPSc9iDVj8Aak4xzAmanhUf0kY/RQXP253DW8Qsf71HKH8FhIQyOLPKxkYc1BAEaHvVAgPeDRCuVvffYWndaCj2OnVD3/AJipUqVBmuArU2RwouxCjtJA/GrkvC41UtJLIVGpJfKLfsWoI2HR2zdWEUeotvSPYzk6k93Lxrc42jmLtLUdQ2F7eTFLimcWRQEPtOL38EPLvPwqEB1QpmEqH/DlAK/skap5fCrbVC9ZnUOMNOip0lVYwBBcU9jlQ5WH+FIf4JOfnUWJnJuLFTYB19ogG4I7wdQfEc6fxcxkAMRfxFxVBZz6rAyKNiL5l+y3Lw2rM4K8ZyP8wpBXjuJZwrG7X7j46bjuIsfOpMMM0hJ2Hoj8WP8AzsqrE1hmvop0J0JVjqpX3lOvnpRDDAE2sLWNTW26XRtwhCCcN6t7DnyPh21YU1RiiN7l2PdoB8AKtqa0SSJODUqmoFqVTVTBkSlxDDGZ44dApJdybn0UIsLC25I+FaPhvRiBGCspcEbE2T/TWy/KhfAYs8sknLMEXwTVj94sP2a2sq+q3ZS29yWOPEU6u078CB5ODQIxywxDstGo0+FZ7pXwmNEWeJFQqQJMqgZo2Ntbb5SQb9mbtrbcQXZvKgXSiaNcLKJNnVkUDdmYEKF7/wALXrMhZLgR6wCPlRmecZxCzLlYq3pJlUnU+sum2uuvaamw/Epl3QFLk5AfTG1zfZjoNNPOocRM5YIoBYKCxJ9Fb6eJ5/CmjBuNRKc3gMnhl3t53p220GakNpXjxJcGzFM+W8shXQ6ek5CovcBcCjqdFsQLZwzHmI5IgPIOn4mhPR/EqZYGeygTLm10BF1GvZny160q6jxrLq7nUqFMyFsE5nkXEeEMpKyA6bLOqoxN7DJOv0ZbsFxQ9JGjv6zIps6sD1sXiN2Hztrc17a0ALkEAgjUEaHyrzzpT0fEZ6yEZQDlA5ISfRX9Ux0t7JIIsL1Ol6k9LDJgbaK9Qu1hAqsCLg3B1B7RSqjgXAOQaKwzoOwH118iR97uq9XaU2CxAw8zkdRUarCh8RXqFpS1wpsiMhlYc7OrdWPxbuAHM2ZnaRjFEdR677iMfzfsHxopLgFEDQpoCjAdtyDqTzJJvevWe8pWCVxWwY+onoFKq3DcT1sMcg9tFb4gG1Wa5I8cT6CORFSpUqiegHH4nrm/6SH0fruPaPaBy+PZVUzAnKt3bbKoLNfwG3nVrD4TrJI4Acqm5a2hEaAXA7LkqPAmj3FcamFiWOJVDtpEgFgO1iB7I59ug51XUao79oGSYVSumC01jJmek4a6gNPLHhlO2YhpD4C9gfvVWdsIPVjmxB95yUT7pygjwU01o9S7Es53dtWPnyHcNBVfFoSNCedwDYnuzchVfYs/xsfkOJsWpm+NvpwJSnlINl6qM7kIoLDzP9KpTNc2dmbS5uxtbvA0pwTKbAAu2wGgAH8hzPOlNhbHJe7OQCe0W18BYGpWpR2E0KijsI2CNbBgoG3IXHP+lPwcuWQqT9YeB0PwP41awyAhu9m+Ry/yobxWIrlYGxU7/VOhv3UXbg8Sznau70mgU1KlC+HYwMLHQjQg8j2f+aKR1eRuDDIk61zEzZULWueQ7WOijzNhXQaz/FsaXdB6SIPSRrsvWNqLqw5DXnre+1r0PpM9tgQZm86O4Tq0Vb3yrqe1ibsfM3PnWjGq+FeW8P4tiY/VxBPc6o4+Ng3zq5P0nxbKV61EB3Mcdm+LswHwrH9ksz4iSxSxzNlxnjEcSiM3eVvUjXVzbmeSr2sbCsNxfiNrySsryAEC35qFSNVj95jzc6+G1CpMaEuAWLOddSzyHv3Zz8aIcN6PtKc+JX0fZi3/AGntz7ANt97WOtddPvHlpKpjiCMAhsXYWZze3Yo9Ufz8SaLLCDCGtrnYX/ZUgfjUPEOGSQai8kXbu6D63vL379vbVjAShoTYgjOrAjmCpH8q8GDcxnWV2gLACALJJG3qv6QHLXRx8df2q9I6G8aMyGKQ3liABJ3kT2ZPHke8d4rz/iMHWm6sqLGbtM2kaHmv1ydrDb4VFw7iDq6sLxTpqtwdQd9DbPG1v/ogW9YgtXb5EwXqAxxPbG9YUL4nhg4kRhowIPgRr+NVuAdJY8SAp+jmA9KMns9pD7a9+45gVP0jxyQI8zkBVQnxPIDtJNh50qtQg4I5zAV8GeOtOQEcekRIR2Xzg3H3iPhVqESS6O2ReaoTmPjJuPIDxoc9wkKNozMXYdyg/wAygq/gpLNXZdPZlrCmIOq4NuR3xDODRUUKgCgchVy9UkNWI2pric8/rNLwE2V4/da6/YkAkXyGZl/ZopQHh0tnhblIjxH7cZLx/umX4UermNSm20id50y/22lRvy+kVKuV2s83wCCysro2V1vY2B0O4IO4OnwFQSAli7sXc7sbbDYADRR3Cp6Y4qdozuxzGQUbt2OZXaqmMey+P4c6usKFcU1IQbtZR57n4XPlVieIcRvDIrgyHdvV7kG3x3+FWHhGYNzAIHnb+lThbCw2FNIqRLCV4YsoA/5qb1Dj4QV121B8DV4JTcRHdT/zaobtJJmbhS4FyQ6+iWG+nbyIIsfOrmHxE40V0Pip/karyrllI99b+a6H5EfCruHAFr7nb4XplRUl6hiJyOp1F2jsatG48S5gYJJ54Y3a6s12VVspVVLHNckkaAWvbWtNxfhhZclhbldQyG3JlPLwsardCcGWlec+qi9WvezWZ/gAg8zWxZAaWdQ2C7anYcQlF9rKGsOSZ5tFwaBmKFXhk3KLI2Uj3o76FfAC3MCrUfRWI7mVv8wj+C1bTGcMjkFmXY3BGjKeRVhqDVRJ3g9Gf0k5TgAAd0qj1T9Yej9msm5vBh/aekocM6PJH6kapfc29I+J3PmaOYfBqv8AWrK23G1dqkGXJg7GcPB1GhrMS9GEZzYOgJu6qcqP9ocv2bX53rbmuZajkdpZbCswicEAYzYkLHFCSMPFoEULp1zDbMdbdg7yasYjhCYpLvE2UH0GPoP9pPaUeNr9lqZ/aDxpMLkdgJZD+YhOi5wdZZO0Lpbv+IEcA4Y2PQy4zEYpn5wgtBGoN8pVV9dCNnvrbtvVwueZDWgceZWbgEhLCGVZxGwBuSkiNa+kiCxYAj3SL1V4y06hXxizlUICl2EiKxNlICk+lra5F9ab0x4O/DY45cNPOMKZAJYBKwtfU5WGoDWI7QTejPS7iBlw2HRoGgDyBlRypbq400JC3t6TJzvpWmoszqp5gnsAUt6THBi7tIQQDZUBBByjnY7XJPwFTwGxHjR3A8KDCpZOBEHanSOqYEU26O63L47xYSEtVx8KV1rSdHejjuM2gHaefhUXGIctxzGlaxqgz7RMJ6diss3cQXC30BbnFNFJ4LmCyfuF601ZjCJmixKe9C4/dYX+daLDSZkVveVT8QDSvqK4szGX/wA8/wDTdPQ/r/5JaVKlS+dDANKh04kU/Ry5h2SKCfJlt8waiONnHsRH/MYf7DRzUwhU6lp2HxY+YhF1oW6XxA7FQt5myj5ZqbJiJm3ZUH1QWbyLaD4VzhEIEspFzpGCSSST6Ta3+0Khq2AyYWrX1WWezTmEMtLLUxFctVJu3SPLXJhZT4GprULxUjTSCCIi+7NyRebnt7hzPdc1VmwJVnCjJjuBcKTFyyqTYRoAG5rI5uGHhk+ZFRYThU08whTKrxFutzXsmmW4FvS3uNrjnWr6DYRIojHf6W95QdGB9k2O6ka32JJNaCLCIrvIqgO+XO3Nsost/AV6jWPSGC+ZzmsVb7NzeI3huBSGNYk2Ubnck6lj3k3PnQbpd0jiwqBjOqyLZhDcZpV1BW24vrZuRA5XFaKocRhY39dFb7Sg/jWTdk5MgTzb/wDKMQxQZVl/J3QCQMBmjkF/TQAm4tYEd1xre+v6H9JI8bAGBHWL6Mq7aj2gvutuPG3KuY/oXw+W+bCxgnmgyH4pas3if7MBG/W4HFyQSD1c3pDwzCxt43qxKmW4mubDMlzhWUdsTE9Ue21rmI+Fx3GoT0kVCEngxETE20ieVD9l4gwIPfY9wrN8NmxUEqrjFELM1jMnpYWYk+1t1Mp7dAx3F7Vvlqh/GScRkEhZQSpU66HfQkf+aea7XKrInhnT/EPLxGZ91gyxqu+bKoZh3XLEV7xFxLDzS4fq3R+theRLEE9UOrsbchdlHma836V8DhZJT1rLOZpBDGAD1jSZCdLdrpz0FajoRw0piSvLDQLDcbFpMh+IWNTbskFGQnOIqe3NhHz/AMSX+1PgwxGCGHUAPLNAqm23pgsfJA58jWA6eYgflaxL6sMKqO4ubkfdWP4167xhlZl0uUuQewkWPnbTzNeFY+TrsVPJ70z/AAQ9WvyQVt0YDXZ9BL35WjHkmanohxALIhYXAOteuHDRSKDlVgRpoK8t6F8GEkigmw3Plyr1iFFUBVsANhRdSRu4hXJVFz3/AGnYogoCqLAbCsZx3h0hLMVIuTryrbM1hc7UG4lxmMKVGtxbuqmnd1bKjMEo3AgjgzF4LBFRMTt1TfhVvg6EYeEHcRRg+IQU/iGJAwuIK7lCi/acZV+bLU6qAABsAAPKi61yxGYbpVC1tZs7cfvO0qVKsUczGO9RMa6xqGSUAgEi52HM+VMROcMcWqxwIXWRvekb90BP9pqmxqThvE4o4lVmIYAlhle+Ym7WFrnUmh352gCM+lFRYzE+IbIqGeZUBZmCgbkmwHnQbE8bdtIkyj3pN/JBr8SKFygsczsXbkW2Hgo0FDr07t34jC/qtNfC+8fw7fWXeI8YaQFIfRU7yEan7Cn8TRPg86iGKVF1jus4Fy2ts7drG4Vu221Z1mp+Bxrwv1kdtdGU+q4G2o2I5Gr36MMnud/1itepO9n9Tt+k9awYhlCSLkfLqrAgkeDDbwohWAw3S/DBcxhkSbKQCI1J1FvXBsRtvWs4BxRcRBHKPaUZhzVxo6nvBBpW9ToMsCIXcrH3TmEqrcQx6QrnkJtcAWVmYk7AKoJPP4VYoP0oT6JZOUciOe5TdGPgA5PlVF5MkQhHj4mj60SL1diS9wFAG9ydrc77VOrAi4NwdiNqyPVlGZ4rXbSRD+blFrekOTW0zDXtuNKu9EMehQ4YKY2gsAhAB6s+owto3ukjQlb86syYlsTQsoIsRcdh2pUq5Q5E7XKRrlekwRPg5EeR4+rszdYCyM7xv1YRsigjNcKNLrrfU3q/w2YxwMkUbqzNcvKU6x2a2aVgpIHcumigACwodxEq0yKhYyDRguqhDzkOy62I9re2l6KwKQACbmrbyBiBGlrDF8cmV1VkjJZiWsWOpIBtdgpOuW97X2v2aV4jwqf0UY7kAnxOp/Gvb+LfmZPsP/Ca8IwX5tPsL+Apn0wZ3n5fvMXUmK7Mfj+02OD43lGhsaM8J4+xcHMdNtTXncjkKSNSBp48q0UGGkw8jQyEZ0sbgWDKwurgXOmhHippmlSM+095lPULhXu8DieyjjUbwk3sxFrd9YbiuJINVsDxOwsarY7FpctI2VBqx7FGp86vTphUx9IPU6xDTivuZe1f8mg7W/KJO5IyOr8CXMZH2Go/ehPAoGs08q5ZJbHLzjiXSKPxAJJ+s7UVpRqbN9hIj7pmmNGnAbueTO0q5SoEYTBozSfmrZRvIfVHbl98/Lv5VzqFS9rkndjqzf0HcNKIY2YD0V0A0028B3UOY01OBwJy4YnmNJqJmpzmomNeEgmRPULGpWquGzNlQF291FLN5hdvOiCUJjWNMvROHo9jH2gy/rHVfkuY/KrkfQ3FHd4R5ufnYV7eo8wZtUeYAzUX6MceOEkJNzC5HWgalTsJFHOw0I5gd2r5+iWMXUIkg+o/pfBwB86ByqVYo6sjjdWBVvGx3HeNK86pau0y9V21tyme34edXUMpDKQCCDcEHYg06WMMpVgCpBBB2IOhFeSdGukkmEOWxeAm7IPWQndo/wASvPca7+ocM4nFOgkicOp2IPxBHI9xpDfp2pbB7esdU2raMrM/iYzhzkkJybJKdiOSufZfYXOjeOlNmjN1kQhZEuUbca+srDmptqO4HcCtayggggEHcHY0Gn6NQm/VNJAf+mwyjwjcMg8gKoLB5h8yxwnjCTXUjJKo9OMnUfWU+0h5MPA2NxRGsviuiTPYnFyXXVGEcQdD2q6gEGiSLi4gBdcSoGpNo5tu70HP3fOqMB4kQtSvQ0cZQaOksZ+tE5H30BX50m47hv06fG5+A1quDJxL0caqLKABcnQAanUnxp9DV4sG/NRSyHtyMiffksCPC9W8IZMv0uTNc6JewF9Bc7m3Ow8BXiJ6VuPThMPM5NgschPkprxfhWCV5MNDISEZlR7MVOsbBfSG3pZa3v8AaVxgZBhEPpSWaX6sQOx+0RbwDVgSjH1dGBDIex1IZT8QKb6ClvYsf7u0Ua+9RcgP/XvLfEeFSwvJh31dVLI1rCVPYYd99COR8RXoPSXBflGHixcIzMiBwBqZIXALqO0jRh3rbnUj4aPiWEjkU5JQCUbcxSjR0Yc1voRz0I1saodB+KmKRuH4gdXIt3iUkkEEksqn2l3ZTzUkaZTVWvYotg+NDyPUf73hF06qzVnlHHH4H0/iA0mXLnzDLa976Wte9+yivA+FGZlmlUiNSGjQjV2GqyMOQG6g89eQrvGeDxYaZ5WGaNg8kCG3VJOqlyhX2r2Lre4FmtYgUZwkBgmaEuzho1kVnYsSwOWW19hfIbDQZ9AK1ajqQtQLXxn/AHEr07o61P7S05PgfufxhGlSpUtnQxUqVKvT0wzmomqQ1E7ahQCzt6qLqx7+4d50FMxOWJxImruAwks5tAmcbFz6MQ/b9rwUGtDwronm9PFEN2Qrfqx9s7yH4L3Hej+JxPVlIIUUysDkXZERbBna2yC4FuZIHeINgUZmNtRubZWMmZyLorDGA2LlMrH1Y1DKpPYsa+nIe4k+FaDBYSULlhgigTkG9b/Tj0H3qI4DhqxkuSXlb1pDvb3VHsJ9UedzrV2ltusYn3Yzq6cCM3HJ9OwgWWHErqVjlH/Tuj+SuSD94UsNiI5ASrag2YEEMp91lOqnxo1Wb6ScMYkYiE5ZlFjyWRfce3ybdT3XBivVns8HqOkowzVwfTwYQVWGv4VHxHhUOKTJMgPunZlParDVTQbA8cDJnLdXY2cMQCjDdW5X/Gj/AA7GLILgg94IIPwrcD5EQ+9W2DwRPKOO8IkwkvVSHMCCY3tbOo7RyYaXHeDzsAJ4hieHSxTQOVE0MchU6oxIGYMvbfW4113r13+0fhwmwbEGzoVaM/WJyW8wxHwrG9POBdbhlMYu8GqgblALMo8gD5UHV3ZCqfxnQ9MBdGcd+If6Lf2mYXEWSY/k8vYx+jY/Vfl4G3nW4VwRcG4O1fJ5NG+A9LcZg9IZjk/Rt6Uf3Tt5WrC1XpNy3+s+lqVeWcE/thjNlxcDIffj9JfEodR5XrecI6TYPEj6DERufdzWceKNYj4UMowhw6nsYXrl6bI4AuTYDcnQCshxfp/h4yVhDYh/qWEYPfKdD+zevJW7nCjM87qgyxxNeWrIdJ+mqRXiw9pZtj+jj73I3P1Rr223rG8W6R4rE3EknVof8OK6g9zSes3lYd1ClUAWAAA2A0HwplR07zb9Itv6kBxV9ZHi4utdpJCXkY3Z7kMT5bAbAchT8DgVzWzSf6j/ANa7ajnRTgD4pySSkKNldho7tYEonuixF277DXUMzZXSNzcARUtdt7bV7mScA4ocHITFmdHP0yEsxYqAC8bNoZFFrrfUW20rQcSaHGqkyN6SkmGVdHjYH46Eao3ZtWgx/B8PJAMNYIqgdXlsGjIvlZe/fx1Bvc1gsKsmDxZgm9Wf1XAsjyKNGHull0KnYqN73pRqba9QDag2sPHqP59Y90tdmnIrc7lPn0P8HxNBHxEYzCyw4hQHAZHA9iVRdWXna+VlPYRRDE4wS4fDY1fZCM36uVQsl+5SVY/q6z5PV4tTymjKn9ZGbr5lWf7lG+jTKRPhHAygllHbFNckeTdYPC1YFbBzGJGOYWrtUeFO2TI5JeImNydyV2Y/aXK37VXa2TRO0q5SqJ6YaGN5XMcNrj13OqR+PvN9Uedq1vBOERwL6N2c2zyNq7nvPIdwsBUHA+G4V4r4HENlU2uGzrmtm9JXF9bg7gm9761f4diGbMkgCyRnK4G211ZSd1I1HmNwaNRra7yVGQR4M4nqNN1Yyfh/D95ekkCqWY2VQST2AC5NM4Nhj6U7i0ktjY7pGL9XH5XJPex7qq4k9bKmH3H5yX7CkZVP2mtpzCtRyh6uz/oJq6PpsKbj54EVKlXKwR5FUOJS4PhU1DuJwdc0eHucrktLbS8SWut/rMUU9qlqgkAZM8WCjJmSwEadc+OayqBaMnQFVuDM19LkaA+6O/SbEcWkd1mw+Gym63YuE62O/pZorXBtqpOt+QBNT9JITLOyqB1cNtNleewZVNvZQZT4sPdqDC4gOoYc9xzBGjKe8EEeVUrLAizzIGnS9cuO8kxmPnnZA8SpGrZzaTMzMvqAjKABc5t/ZFdJpE1yiWWM5yZoooSldqDiAMb0NwUjl2isSbnK7KCe2wNqo4joFgQCxMiKNz1mg+INamaZUUuxAVQSSdgBVjozAs//AKiTkbJEd4iOcin/ABdj2AEW3JJaVew4BmfWW1adN7LmZLg/9lsEjCRzMsO4R2USSeICjq17vWN/Zr0TCcLw0UXUxwRrH7oQEHvNxqe80QlNVOvtTVECjichqNU9rZPHyg/F8BwkgyuhKaHqzJJ1Vxt9Fmy/Ks3x/oUoHWYTQjeJmJRh9VjqjfLw3rXTENtUMUpU2O1FUle0D9ofPJzPJR4EEEggixBBsQRyINdC1pOmvDwk6TKLCW6v+sUXVvEqGB+yKA5K0BsjM2KQwyJEBXoX9mqf+mdvemkP3cqf7KwDCwJ37B2nkBbtNh51uuF8Ww+CwGUyDrEViyerIZXLOR1Z1X0id9ANb21rD1BsoEHcmNOmJh2c9gJn8NxeVZDizd+tsZVG4QXydX2ZQTpzueZo1xif8rhjVAroxDiYn1MpBBUDUvfwtY37CBwkeWNVveygX7bDernRyXK00PK4lXss9w4H7S3/AG6v1PRLXWLUGMYzJ6Vr2ssNVhznJH8S1x2KQorRKGdHVwCbGw3y8rkEi3ME1dMvVSR4jkpySfqnIBJ+ywVvAN20+mTIr2gN/psyacgVJZvAAfEikIM6EiG8cMmIRvZmUof1iAsh81zj9hasVH0hX6FCN1mw+XzlRT+6zDzqStlZysms8RUqVKiQkZ0V4M+Giyyy9dK2XO9gosiLHGqqNgqoo7zc865xf6PFKdi8Thv8t0y/DrGo/hQCwvsNT5ViekOLM+KdFSVgMsTMkUhChznms4Fr5cijXQ+FJdA5OoFjH1z9Ih1qGyk1qO+B/mGuisZaNsQ287Zl7ohpEPMXfxkNG6GJxJrWXCT2Gg/MjQbWBkBtXRxdR68U0f2oywHi0eYDzNbHuV2JyPrNVVYrQIOwhGlUeHxCOuZGV17VII+IqSvQkr47FCNC1rnQKvNmY2VR4kio+AklHxMhBLCwIBy9XGDqB2M2dh3FaGY6+IlVEOl2RCOVtJ5h9hSUU+857qOcZUJhJEQZQIiiAbC4yKPmKBqG7J6zLqW7IIE4dh2fCxs4HWOolf8AWSem2+wuxHhas7MOpludElIB+rLsD3BgLeIHbW8yAAAbAW+FAOO8ODBrj0W0PLzBGx7+2jGb6zjiDaVVMDMdY3/OJa/1lPquPG2vYQRViRAwIOxFj4Gqw8oKOvcMfzSG6dkjj2+9V5dp15A1dki9LOjNHJtnW1yByYHRxqdCNL6WqLE4uOIAMQOSqBdjbkqLqfIVzDSSMSSmRLaAm8hPaQNFHdqdeVWDMpyJVkVxtYZEmn41jQ0cQ/J7uWAlKyaWRm1hB+rvn8qjbjzdZ1Lxu0oIBMUbtGbgEHNsmh9Vjp3ixLlhLYmBALm0r/AKt/3xRno/grdbId3lf4JaLT/ToyaywPzzxE13S9O7FQMfKCzxYIQJQ8d9AZEZFJOwDkZSe4GiUUt6OOgIKsAQdCCLgjvFZrGYL8lIK/3cm1v0LE6W/wCkdvqm3LbfTqw52txFWt6Mal31HIHg94K6bPdYV5mW/kI5L/8AO+syUopxjE9bOSPViBQd7kjrD5WVfENVPJW4HAgaE2oMyt+T5gV110037iD21v8Ahj/lGFV3AMgDJJpuyEq/kbE+BFZrh2D9o+VabomwKzpcXEx0vqAYoje3K+tZ9fV/RD+QYz6ZaRcU8Ynn64qOItEZFGR3RQWF8qsQum50sPKiHR5mMkknVSEHLGrEBVyrdmYZiGNy1tAfVrSYk4bBtkbPJIxkkbJHmdVZ2OZsuthew5mxsDY0Tjw8UsYkhYMrC6sDcGs2p19ltIrI4459cTbpunV03m0H149MwTVjgUObEux/w40VfGRmLn4Ig+NMlhINiKdwKdRi3TMuZoYzluM1ld9bb+1SxY1c8Qvxr/AXtlF/2Y5G/ECnVHxQ3mhXsWV/hkUfxn51WxvFYIiBJKqk7Lf0j4KNT8K2VD3RJr4WXaVCf/8AR4b9If8ATl/+NKi7W9JbcvrCXG+LGNVjiIM0mkYOoAHrSMPdXfvNhzq/wyERxqg5DXtLHVmJ5sSSSe0mspChEjyu2Z20B5Kg9VQPme0nwsRj4i451y7LxgTKU4mpRltqD4g/ypsagm17eNA4eLdo+FEIMYrbGqHMGUIjsfwcZs4+jk/SJuewMNnHc1B8dxqRQMM4IxDnKpjUkMntSxjttplPqsRf0fSrT4XE29FtVPyobx6AoOsTV4vpI+1gAcyftLmXzB5VqpvKduR+koGYcHvLHBOHdWMzKFYqqKoNxHGvqpfmeZPbbewNLpIfokXX0psOPhMjH5KaJRuGAYaggEeBFxWZ6f4lhFFFE2WV5RlI1KooPWP5AgA+8y1erdZaM98xepLWAn1lTinSFi7RYYKSptJKwJjVuaqARncc9QB46VVwXFZRIsc7CRJDlDZQrI59UG2hVttrgkb30oIixoFUWVR3k/1JqrisQJIGkiIay50PLMnpL+8oroPYIF2+YyyYZ41wZrq8ejIfRPKx9ZGt7JsPMA8qry8OlewDMg9rKNSewOdhvsL94rXRMHVWGzAEeBF6hx2KjhQySMFUcz2nYAbknYAamluIcPAWA6PqmqqFJ3Y+k5+0x1PmaJR8LUbn+VB8TxueW4jHUR8mIDTN3hT6MfnmPhTeDGSXEfk0krvE8byMGsWORkUx5rCyN1i3H1SNATRXpZELt4g3uwMwvw4Kiy41h6AQiEczGupbxka3kqVc4bhzHEiHVgozHtY6sfMk03ikgkmXDD1UVJpAOfpkQr4ZkZv8sDmat1lqycsfMDRlsufMVR4iJXUqwBVgQQdQQRYgipK5RppnmE2A6iR8Pyj1TtMTXKE9p9ZSeZUnnVzB4G+p2rQdKcGA0WIt6p6t/sSEBT5Pl8maoQtdBoj7VAxnNa9fZWFR2PMhVLUL47JBGnWyqCw0S35wk7KhGtzRHG4kRgaFmY2RF1Z27FH89gNTYVmON4eRZ0OJsAQGRtTHm1+iVjoLaEk2LG3IWrTfeta/jBaLRvc24cAeZd4AjhSZGLSMbsSzMR7q5m1IUWA8O+iWHeTDuZYBcMbyxXssn1l5LJ37HY8iBWGnym9E4sUp50pBDDBnS7dvaXMX0iXEKPyWMm9w0kilVjINiApsXcG4ttpvyI1OExhba5r5usv9Ln9/ONQ3ytptpTJsM6OZYMt2/ORsSEY2tnBAOVtr6ajyNWjMVUF7Zudr2v3XqUrRBxPEk952eTFSMpeYAKhTNGuWRwWBJJNwpNgDlHhanYbCol8igX3O7Me1mOrHvNRLjUsSSABvc2t50zFcTjRc1w19FCkFmb3VHb+FWXAHE8SfMvUqB/l+L/Rwf6rf/CuVaVmjpUqVcfNc6Ks4T1h412lUGQZoYqk4h+b/AMtv50qVUWZj8Qk/Bv7vD+qj/gFZfpl/fIf1Ev8A3IqVKmeh/wCQPz/QxbV95A2K9U+FCejv5qX9bP8AxmlSp/5jGeh8E/u0H6qL+AUA6afn8J9qX+CuUqX0/eCEPaV6v9F/75/kSf8AcirtKtOs+5aZ7fgMsj/9riP/AGuF/wC7iaM0qVLk+EfIQmm+7E5SpUqtDwT0q/uk/wCrah1KlTzpX3bfOIesfGvylHD/AN/X/wBu/wD3Eqx0y/uWI/Vt+FKlVNZ97+Qjbpn/AAx+cxnDPzMf2F/AVdSlSrKIeGML6oqrxHlXaVGPwwY7wbP6reB/Csj0X/vb/ZP+2lSoY7SH+ITa0qVKqw0//9k=',
      name: 'Zoe',
      msng: 'Quero você pra mim...'
    },
    {
      id: '5',
      avatar: 'data:image/jpeg;base64,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',
      name: 'Miss Sara Fortune',
      msng: 'Olha essa boca garoto ou mando você ressurgir direto pra casa.'
    },
    {
      id: '6',
      avatar: 'data:image/jpeg;base64,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',
      name: 'Janna',
      msng: 'Olha o tempo'
    },
    {
      id: '7',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSirQIbfm_MPSL-oV1qSSWtibIEiQb4CsLpynEtaDVGK5qsYdO_VQ&s',
      name: 'Kindred',
      msng: 'Nunca um, sem o outro'
    }
  ];


  //Retorna somente uma view
  function Item({ avatar, name, msng }) {
    return (
      <View style={styles.item}>
        <Image source={{uri:avatar}}style={styles.avatar}/>
        <View style={styles.spaceText}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title} numberOfLines={2} >{msng}</Text>
        </View>

      </View>
    );
  }
  
//Você pode alterar os valores
class Conversations extends Component {
    render() {
        return(
         <ImageBackground source={background} style ={styles.background}> 
            
        <FlatList
        data={DATA}
        renderItem={({ item }) => <CardConversation avatar={item.avatar} 
                                          name= {item.name} 
                                          msng = {item.msng}/>}
        keyExtractor={item => item.id}
      />

         </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
    background:{
        flex: 1
    },
    item: {
        backgroundColor: '#666',
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 35,
        flexDirection: 'row',
        alignItems: 'center',

        
      },
      title: {
        fontSize: 19,
      },
      avatar: {
          width: 72,
          height: 72,
          borderRadius: 100,
      },
      spaceText:{
          marginLeft: 7,
          width: "70%"
      }
    
})
    

export default Conversations