import React, { Fragment } from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import { Link } from 'react-router-dom'
const Pandit = () => {
    return (
        <Fragment>
            <Header />
            <div>
                <div className="page-header">
                    <div className="container">
                        <div className="row">
                            {/* page caption */}
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                <div className="page-caption">
                                    <h1 className="page-title">Supplier Pandit & More</h1>
                                </div>
                            </div>
                            {/* /.page caption */}
                        </div>
                    </div>
                    {/* page caption */}
                    <div className="page-breadcrumb">
                        <div className="container">
                            <div className="row">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Supplier List</a></li>
                                        <li className="breadcrumb-item active text-white" aria-current="page">Pandit & MOre</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    {/* page breadcrumb */}
                </div>
                {/* /.page-header */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="vendor-thumbnail">
                                    {/* Vendor thumbnail */}
                                    <div className="vendor-img">
                                        {/* Vendor img */}
                                        <Link to="/cat"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFhUXGBgYFxcVFxcYGBgXFxUWFhcVFRcYHSggGBolGxcVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy8mICYtLS0tLy8tLS0tLS0tLS0vLS0tLy0tLS0tLS0tLS0tLS0tLS0tLy0tLy0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAFBgMEAAIHAQj/xAA7EAABAwMDAgQFAQYGAwEBAQABAgMRAAQhBRIxQVEGImFxEzKBkaHBI0JSsdHwFBVicuHxBzOCssJj/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAQUA/8QALxEAAgIBAwMDAQgDAQEAAAAAAQIAEQMSITEEE0EiUWEyFHGBobHB0fAjkeHxBf/aAAwDAQACEQMRAD8A5ChB2z61jTxQQUmCK8U5iBWqI5UfpU9e8tJriHbLUd42zB6gcVeLqxG3pkT74ikxt0pVuGCKYrDVAvbMbhGPbkClZMencRuPLq2PMYbEKcXuWQkJzjj3961bAW9u3SJic5zn9PtU5IDDhETG0fWIg94qraOlBRPl3ECc9f1qeU1GK+vUoTsLKZETPpx9KqK2lbbgO0fwjg1JcrClLE4HlzyrbyZ+9alQ2hOCEnIMiD6d6CGRPUXElXngfMB2MyRR6xnLiVZAwAIG3+H1NAWGAVGACcHv/eKP21sUtFXHSI9OfvXmM8sKttyhC/lHU9pPQUSbhYBAISOvP3HIoN8NSilSCSYO4HjdzEdKvMXC8HalCMhRkZP/AHWKZ5xYkj7ZAmMHg1SWsUQ024SUqCvNtV0M4968uLZDhJT5T2o9jvElSDBoXWxWKhumVNmFCO3Y+1VkrrINQB45fWlswJxXO7Rgc11nV2A42QaQNY0NbACkiUn8f8VTibapT0hRX9UpoAAM1P4d0pLyzFCVukipNC1JTDk+tUKpo1Ef/UZTkUiGPFHh4NmRQNOnmjXiTWlLAPSgn+ZGKbjut5ynq9pPq+iFtsOUISaPanq5dY20u0IB8wgR4koVXrTZUQlOSeKimprZ8oUFDkGvTQZd1DRnmQCtOD1FDnDBB7Uf1PxEu4QEKAAH6UJCQeaEE+YZA8SVV+F4WMRFQ27SA4MymoX2IqBid1P7mpNJEm7el9QMYbS5SVbQKk1xBDYAOKE6elXxBA60d1y1UGwaCwNjD3oxYaQKn0xvc6B61EhpXQUQ0axX8QGOtNZhpEUAbk1+mHFD1/SsqtqIV8VfvXtBYhm4Ve8FXI4KFexiqN14ZuUDLRPqCDXSCbRPKifXcao3d/bbdqXlp7Zmud32nR7QM5Y5arAyhQ+hrGkHiusW95aqTC1JVHcAfWg3i3wyhaA/bRxkDqO/vTVz6tjBGLSbgPRtX2j4LnEzJPXoCav6y+SBA4ggyOBxxSg0BJTz6mp27pbSikGR2PFC2GzYje56d+I72N5ICiR2IPRXQ+x71Kp08k+bMjvQbSrllSTKiFfwxiD61cC18iKmK0Y8NYjFpDwOSCOuenTkUcTdlMbsj+XqaV9NeI8vzE8iOnWKLWz+0FAM9pmfr60po5eIRRcgLJIMkHKSQMj5iKuW7ob2hR3NjASBJKupPahDTk8wT6dO9W23VAAJVtk5kfyr0w7y2+2oPANgpKoMdvf6UYdfKVRsn1A6xQV19UpO6SQUbo6mMx7V4y6W3CFPEjrAyYHAJ4OAK8DU8RfMYXjIgqSvukxI9qEahpyUDcFBI/hWY+xNQ3+pFoFxZO0/KByoxgDt/wAUvt3hU4S6d08TkJB6Cm3cQVHEJ3Hy0Xe0VLrIEUrOpH7sgdSkxH04NHrDxI42AhaAsD95Jg/UcUzGwHMTkxvysCO+AW8nbXPPFuhqtnYHynj0IrvVjqzT2Bg9lYrnv/ku3B2rEYMR1MmJHfP86oXKEI35k7h8g38TnaNziAnaSo4AHJNH7Hwa3tHxnVBR6IiB6EqBmi+hrbYSklG5RGT29BRu4facSZSYP0I9QaVk6puF2Epw9GtW+5imvwc2PKh8/wD0kK/kRQe/8JPJB+GUOAdEmFfZWPzTQ+HEYH7QdCPKr6jgmqzN3K/MraeMghRjv0PvQDPk8m4Z6fHwBU56tspJSoEEYIIIIPqDxWiq6dqduzcQl1AUYgLThY9ldfYyKSte0BbHmSd7UwFxEH+FY6H14/lVWPMHkeXp2x78iB017uitQk1s2nNOk88U6auaYgfNyR0qm6mvWQQcV6eJjx4aUwXU7oHvTh4oYYLOCK5FZj9ondIE80c1tpSESFKI96B8Vtdwlf01UJWrDKcqIqzpd40p4gRABpBQ+TgmiOjNkb1A8CnstpQilb1SbVLtJdXH8RrKCrMkn1rKXGTrDHhxlZnaZPYmizPh22iFNpj7n71Bp96sIBkHtjNFX7uEzya5k6EWPEHhlDKCtpCVpPIIkj2qHwtdfsVIPCSRHoelOtooBAnzE0O1PRN251vymOAPmjvXjNHzOceNrK2b2rb8riskf8UozJmjviW3eK1KcbUkAASoUNsYBBVETVmM0lmLKamrxLzLSQgHr19Kt2ty4IBBIJgGP1o5pV+24lSVJSExPHIqe21VlZISmEtDyiOVdKlL3yJWMVcGeNPFtYC5BOeR2xzxRF66b+YciOQYInKY470NsdPceX8V/EjA9OlF1WCU/wDrO30OUn6GktU0NJGNZaW4lBhsBECMFSTxn0oihAWlS0kfCR1JExMA+uaU7xoK8rsJM+VQyPoelTN3CmigKVva/wBInA7jqJNDp9p640Oqk/SQev19KmF0CNigCYH/AHNC0as24tISIASAQAAJ7kcn/qp5RugeXrGRivCMi7e6qpx87idqPlHeME+5/Sst35kz6faaFF6XZHBKiD6SasifmRzO4DpB6e/NUEASUEk3C9tdyPY8Vsm8MkcgH7UCYeO6QSCeO3tUpuyN8iDz6Glld4xGuhDmnXJWuThCZIVGCQOp/hnH1oJrmqF93aI+G2YSB1M+ZUnOT0q4m4AtVJcKt4OzHASlO6M8mSftSrZq8qY6AH70rECzMx8bCO6mlCqP7X/sdbNCQkDr/fFZdMuDzIj1ScfY96qWL3lAnPrRTSrtxDkqSIgiQUGCcTtUM4nGPcVtGYT6doHVqmww4lSf9wx9FDH5rRhlDyum2ep59u1XLl9w7lKZ2kyfKAU+0JJgcVQtrALO5EIV3A8p900zbxA3NXNNS01TJ3NqJB/dJ/kf61Ff60f8ItkhRKgUwQeuZJ4MEzNSu3TqFj4gkDhQyPr2pi0dllbRS4g7lqnnqTCdn0imIQCC0FwxU6PznKmrJZonpvh9bhxz2roX+QMNrKVRzW7DzFu6DiDXUbTptZxFLXRiFdeF3kkSnHerlt4TcEE8V0/UdTYU2dsTFc8vfFxEpSnjuaDE2raoT7b3Gfw94ZtlJ80E9aD+MbRpgfD/AHTwe3pSwjxG6lzckkA8iimr3AealR6TQ9ptW8IOCNot3Oj+XcgzUNg8pCHMYIit7DUC2dvKT0oprakBgQmCqmM2mhAAveKW81lSxWUMKp1q3eCkpIIyORxgwcdMifrU6lng/wB+1Wi0+ofKyJyRnn0UEj+Veos3NvmSJ6gGRz0kCPtXDDOh9x+c7WgMPYyezfgRRS2uwBE0uFC0GCkx3ipm3qoB8iII8GH7i1bdSUqSCCIIPY0geIf/AB2QCq2OOdiv0NM1ven4hQAcJCpnoVbT+n3o7aPTTFeoBE4bYhxpZacSUngg4P8A1TLahtvIAmn3xF4bauU5G1wfKscg/qK5B4gQ+w4WnMEfYjuK0r3G2hh6WMN34jSnjNDxrb7phOBQKyslrUmQqFGEkgwcxg9fpTivR/8ADqCSZkSDBHWMg/3mvFETbzA1M09sbcn5iTRZrSwcpO0/iorJujdungdVBRA9EhR//k0ljccooXBBCUuD4iP/AKTzPc1teXcKLaiUhSSELjBJB/IxVe/ckmqpcJTtJlPMHOfTtS+YzVFhDa08ryMfbFErS42p5k+tEnrYOkAgGrJ8GLkEKgH3ppyA8xFaeIBU4CMDr9var29KmyCIVj+Yoo74TbQCVOKHtH8qBXTKEGA7PuDQ6w3ENH0m4TcX+zuUJ+ZBC89g6pKvwoH6Uv2tmQO5FMbTlupSnEuHcUEOI2eU7jtwqcQConp7UKDakmBBHQz/AHmk4TosHzRjGGqviTW74EYg1KXVIM8A98VLbrSgbnCEjrPP070qa5rBcdJSDt4SD0HsKfjU5DSz2V1xLbc+0bbTUSgGI+hq7ZeIUpI3FMDmVAfU5rnoviBkVUU4CaoXpSTuZOeuC/SJ0PU/ELTrhCPhfLt6AKkd+pGavKuG7ZIcZSUODaUpKiUc+byzBBTI+vfNc3atiriiduNqYJo/s6qRTQPthdSCvMLeK750kPtklpZj1bXE/DX+iuDHcGlh+/cVEqOKu2OoKbUUmFtqwpCsggmYI7TnuCARBqtqmm7fO2SWiYE5UgnhC4/CuD6GQK0cAUZz2Q3Yh3T9QJQDPvS9qbo+ISOtNfhm3bQ3KxM1a1DSrZzOAaQOsRWoCV/YnZLuICdxMAU12WiPKbk4EVOzpIGW4JFSan4hdbRsKI6UbZi59MSMGgeqBf8ALW0A7jmhOo3W4JR0TXj7y1kkmoizFF98AD2lfbWVLtrKy5tTstvd1fYugaTLfVKINakK45WdoPG1DoNSKQkgkgUttaiO9XEagDishXKulNRcOSJBb5MmPMmY+iTj1NEloWiVJcxPBAx+DiqmnFJupwP2SjmMwD5QTJkz0B/FW03ACjBESYj36Vu9QErUdpR1jVXg2EKV8+3oAY3DIOPtQ++sw+wHX1NOlHAJG+N+3gAziJmRgnpU/iZYUhPU7wBHPUmPtVRbyxbbYTCjyVlBHnn5d0JORgj0xSndvTv5jWRa2Hg/tK7VtvZYUEFWzeoJQNpj4iUwkCBxPXqPpfudq23HihSTKQlTpIAgZSgE5B496i022UphAS4ls7FgKJTA/bEK3EEnIScmD14qbVfiG2K1LQdytxCVE7QZBJCxOfLj05JqjcRW3dr5kWrNfC+GEqB3biQmTA2EZ+pP26Yqxob4Wtgq5La1QAOVgkCQZ6D1ofrFwA02VJSYKYIWrqkgxkyCCcED5e9WvCahuRtUpJLCcwkkSgwPLGI7yfrNL6eylmZl+kfj+gl1WjJMqcXAKoG2IyJ80/3jpULWhoJMrOOgif8AcO/aPbOaJMPjzJ5BkZ6iSKG3Ta2jM+T904x02n847UQNRoVSJOxpbSCFBwuAnBQODj5weOe9NOlac29KfigLH7ogniQec/Skl+6JSSATjztjgicqH2H6+tFnWXEyCoeSVIS15ipAlMSDnP8AIU1aPIisuL2NR8f8OqUSlSj2MUJf8DDfKvMnsQP0r3SvFjpjdtiNwC1hSlJicHmQcZFMNvr6XUyn6g8ij/xgSR0yg7wXaaIlg7m0pSYgwBkdj3oTqGkhRIwPQAR9opmc1FMGaX3L5KlntWLjVmupmpwKuKniDRSDukqwPWla8sIyAa62AlYih95oaDkCqVFChFML5nKLlsEZEVUFqeldNd0RBwRQ288L4JQYpqmLZIp2yFJTNVHlEyZpgS6W5Q4ifWKFXFqCTtxRoaO8Bl22lTT0+eaYbHWNjsFAW2UkLbVJChEkQOuBBGQQD0oPaNlJMipbXDgVxml5a5h4h4johy1cKG7bdkeZLipKTMYUBxkdMevNV/E1g3br+GVLbXiUrIKTz5kLEY9CO2TVS4bXi4AKVSVGQPm6mRkTHUcmoNe1x2+2h1PmQmEyOUjoDyen5+qVRGjTkyKRvIGX3G1QDVxu9+IQh5Mg9aBWKVlE7gQk7SOqckCe47H0Ipi0/QH3kzwOneh7Z1UI5coIswbrGhhpJdbVKZ4oR8QEU4X/AIfui1s3CKR3rdTZKTyMVUFIXcyZ3Gr08SBas15WihWVtRVxvjtW6XIoTbXRUYBH1mrSnVgEwDHauaVI2M6Sm4RRc+tToviKW/8AMAehrwah7j3ivdpvaFqjhpF4XLltBIByJMxtUFJUCBk4Pcde+NbvWUpWpO7IJ7foYFDtNtCh9J3bt22IESJCgQSDgpkyRFXXNKZU6tTkqJUZgwCaFtOwmKTZIg3UNX+IpCQo4JJI9Emt2txYkyASvKjj/wBhIk/r9aMLsLcIWENJB2qgmVEGDmTJ+1BvirNuooB2j4hO3AAJK8dsEdKEkEDT7j947cL6vn9oQtFj4aQonO8I2RlQdJAUUmFTPPMHtFXNSeWm3IXuLpLZJJTERtG0pPRQPlJ7GIoCpz9gx59pKnIJGAS4ck9ExJx9utEL+4cQ2UOOpd3bSFgELOf38nHECeh4NMqDqHdv5/eUX94t0Eyfk6f6v3k8gTHHWKM+HFQsHaJFu2RCo5UB5hERmCM88kzQO4tXHGmkgcxCiDjnPPGOs/rRLRiPiHnDLKTmeFCZyYjtPbjisx7KfvMWzXQ+79JW03X/ADEKIHnMRPE4putr0KTByDzXOL3S9igUEwobhPr0mBmcVZ06/wDhDBIz5kL6+qT3onRW3WbiykbNHO6t/hwofIJIUJlHv6R1/FaNaQztU4lABOVpHl6kfEbjzIOcgHFR6VrTauFBQ6g8j3BrNQ1FtlW1tUgmSn+GRJlXr2PSlre6yhqZYN1TQlMI+O2slKFTCgVLAWoBQSZyJM5FQaZcvLQot/EhJ5EJExIkEiDHWmKyv0vI+HxIJhQCknYkr4PGQkQehPpUtzpyVJUltYATO5KYT5h0mcHrH9a0FwKO/wAwcRyYm1KeJo3qBS0A6sKXGdvHp7+9DwuTINTXuipDflRKweSuBxMSJzxz+KHJsFtwUpUkFQn9okgdwcZxNNV4p8LMb2/T/kO2F0RRoXIIoAhNXWHop4MkqbOIJNalk1L8Wvf8RRXMqUnNOQrkVT1Xw+jbKRmir16BFXwQpE+lEJlTnj2mQkntQd1mujmwCpoPcaOJ4rDDCiD/AAzqyEn4dwTsUCArkJOIUR14zR53QgClYQFtFQUHGFjaFcBSkkwOZkfWgzujCpWtIcZT8Rpax3CSQCPUdakzdOxOpGr4/vEoxEEhSJHe6D8K7HlPmUASI2qEgqMZA4PHbFOdogggJwBS8wsqSFk8c8RJzwPrTFYqkA1R07MBT7mLzYQvEtupxmuY+MbVAcUodafNTuto5rm/i+680VRdyNhUU3Dk1lRk1lbFQ29YFP7RBxjjp7jtRawcSsTweFD17/WrFlbbiN6xsT82DBA/dkCRPEioHfh7lKaG0yYSBynJ2nJ6fyrlM+sV5nVQaDfiDrmwCFkfUe3Sq1wkTxR+4Z+K2FJ+YfkdQaoJaJIlM+38s0ePLY35lHasUIR08KVbtrInarb9juQT+R9KIsTGTmo/DytxWyQQFpgT/EIKT9wK2Z7EQanyPvBOPQalpBNX2HtqFE8AH+XFU20VV1W6AKGpyoyfYf8ANLT1NUOtpA1ZhQII6HHQbsmBxyaJJbSoJJaSghKUmAnJHJwPtNSFgJyKntRvISOTVJYyehzK7qkoTOAAMCle91s7lBI5G2ewkE468Ub8cWi2kjtSyw18QQASfQU3GgqzEu9mhGnRih+3KXPl6rUUp2KBgFORgA596qOaedxaWAl5JG0n5XE9D6jHPT8AJZtvtL8m5Kvb+U0yXQ+MlIW2vcIIV/CYHGB1G6e56AUDLoPxDRrEp6haL2pR8FaFd0jn0SU4PuD71S/yZ0eWFBzkY3HjlSZwffPFNrTD5AHxXQAqYmSB182CeuDIq/YJbaBCQZPKlfMYECf6Ch11xNLXF3TbRTYBWXJ+GTB27YJMK2qjIzyfyIq9ZeHLh5JUHUpQuTGxSFCcH16cyKYthcGUyJmDwY7jrVpu5Wms1zNR8QEfBjm0J+MYERCT07yrP61jnhBKRuW85I/2xx0BBimpnUO9Qas4FoIB5rRXiZ3cgNxJN2lJgGYxJ5Pqa8GrIGCaBeIFhpRCT1pdcfJ61ZjSxJnybzpTN8g8GrAVXMG7xaeFGiFhrzoWAeKZomDJcb9TegpFMNm95APSki+u1KWgd6cbQHYPahDR+gg0ZcswAqDwatX+kEZBBFCC/Rq9uzgelLZzrABjFUaCSOIuXTB3JA6mmBm3SEweIqpapBXJ4Faa9qIbbJmmkxe8BuISh8omEqBI9CBP6R9aYLYAJA9KUtMWp8pWe9NzTcZNCooxuZ9QEEa2PMK5v4oSd810jVsrFLHifS5zFM1SRluc7IrKmeaIUR2NZTLk8aU36hCVHyJ4T+6DySR3PJPWtFBsGUOQee4FVSvfyI9zH61oy2JiT+P6VzdA5nR34lyyulJUZIKTz/WKlvGTMgiMT79CK9s7ZMSnJ48w61buGdzcdRI+xx+aSzAPtK8IIFGV7F1TZCp4II/HemG8QCven5XAFj03cj7zSravQQDkdP8Av1ps0xYct/VtWP8Aar/n9aXmWPb6R8TS4uEtoK1YAH9ilvTEm4eLiu+Pam//ACpD4CVnAPFCVtIZuPhpwKPAQoIHMmZt4et0Yg0Q0pDSCXFRI/FDrh3agq9KT73UHXCQCQmeB1pqLZiHahC3jbWkPq2oyB1rXwkwEKClDy1W0nRFOESKP39r8FvaKaSAKiK8xkuWmFbSImijVg2lMkCkTRtOeWQqSI4p0tQsABRpZIEKjLNlbJJJIxUzlk3MwK1S52qQNk0N2KAmV7zxS0AQBVJ8BXAog3aDrVptlIrwxs3M8XAgZm17ih+vo2IJFM7gTQPW2QpJ7VpTTPB7nF9fdJXnihiAO/4pw1VpsqIAk1DYutoUApPPpVSZKWqiWTe4rC3WeEqP0NWWdLewrYYHeny6vbdABiZ+leseI7WNhCQa93ieBNGIDe4CtSFFBPIp6CtoAI6Ckp5KQ8Fo+XtTAvVQQBBkCguVBgRG3w5oCH963CQlMRGM859Kpakz+0IRuKQSNx/MemBTR4TYWbUhQhS4Ofbr9qFXrymCdrKlp6mPJjuelR5cjehlHN/rGYyNTqTsPEB37C2xPeljWWHXFbVDjp0p+ceS4ZMFJEp/ofUVRurYJzAINbhzsfqh5EUC1i1Zn4YACeKO2Vzv5xU1tZbzOAO0c0Xs9NbUdsVR3ZNUCXraKBa46FJ9hTnrOnthQA6DNLmq6WkpMVmJwq0JjC5yW9QPiK969oxd6Md6s9ayqhkElKmW7K3DigOQOQAPbnP9mpH22FKHw44kj1noOh9KEW90tLi9piZSfY1uokwf5Vzmxm+Z1EBO9RlttMATuHBAme4qFaBn3ojolx8RmCTIBHSJH68VYv7Pg9Tg4jPFc05CHIaWBRViJbyEgqHWftFGvDL4CyncYWkpIwBJ+U/TNUb9pG9SVfNgg/39a0t0/DUFCZBBlJ9ufzXQ1almlb2lqy8TfD8qh5wSD7g5/NCr3VCq4Dhql4lb2XTnZULH/wBCT+ZocVFRHerMeBfqHkTkm6j/AH18FtCDzXmi6VuIqppFnubT3prtW0tAd6DgVBN3vDVnaIbTgdKpqsPiuSr5RwK9RfFQ2gSaK2rYQJWc1k9LDLCUCEirtvagiTVG3cLhwMUS+JGK8oEFiZIllIrVao4rN1V1qk0fECShdeG4FepRULyAK9uBPbSN56gmuPn4Zq3dXYTSZ4n1nykA0u7MYBQlKwS2Hdys95E1J4qDYAUlIB7il3Tr6Mk1a8RauHUBKRGZOI6cU1QdU8fpkWkuNqVLmffIolrOnW4QFpiccf0pTslkE0YtzvgLOKNhRgKbWNOlOW4bExRS0ubfenj5h/Olj/CtIGF/mtPipFIYEgiOXap3tp5KFkdPKR7QagsyWlqBUFIUZHcT0pa0zUy/ZoeSZW3+zcHtwfqIr2zud6hBOahy9Y2Jgtcbj8fH7fhNTptSk39/4f24d13Sm1oUpAAWBIIxMZpKYv0kQr5FYnt/zTJ4k1b/AAzaRMqggDuT09hXNkPKAjkH+/uKcT3WJUVx/vz/AKhYbVRZuM+pPLt46oOUqHBFeaNrn7SSeEqP2FUdP1YtAsvhLrR6TlJPJE/pW/8AhrQSttZAIIgn+IRj70k5CFph+Ijhittp7dagtZ3dDVVxalTnFe3kfD/ZqBg5E1bt9NcDUdVEZHatOdEFk1N7LExWuI3GsqW/snEOKSUKMHkD7VlVDIpFgyQowPES1JIWr3P86sNqolqWngncOT/YNQ2mnSRuVGe3pPWs7ystmVIjKak+jKO+JUExJ28SMp3+kincnc2oKUTgKB5Ejn24oHo9shtJCclUhRJ5iR9qJsPkJgJHGfbg/rXJ6p9b2PEsQUIveKbIo+G73G0++VCfpP2obbOJPMj6SDTn4ity4wrbEhIWB1lI49cJj60hNLHr2gYqvpX7mKjyJt0Zv4osd3wXO6SgmOqDj8K/H210vTkjPNFLtrdZkwfIsKEkZB8p/wD0PtWaEgbZq9Mh7dSB8YXKZfYd+HFXWVl1wAGhtywtc7elaaJeKachWD614QHG86CwwhlMnmoLZKnlyflHSh9zf/EjNELO8CUQOayBpMKruAgQKiYvZNB3Fr96mt7JwjtWbwStQjearnanJqwyVRKqr2OmpRkmT61dcbJ60W8Daet3qZg1l3fIjFUrlCUCSaCXGoAHAxS3ykbQgg5lDXLxRMAEClPWf2g2DnrXQrxlD7UJgKj61zxenvtuEKSTnnpHTNexnUPTzKExDIp3gm0sF7oAJ9hP3q6rQ7hfyo+5FdQ8J3TVs0pTogmCe8RgVnhrV21KX5QJJIAgRkmPaqEvYsd5MFbfSNhOaJ8J3CRuUmB1M9KvLS22jA4x9e9MfjTXy4fhNwEp+YzJPpPak164Sr6fmiJ3mk7cVILp3AFStmRXiGgsRMU3eAfCKrlYU4CGUHzE4CyP3U+nc0vJ4qeQ1uZngDxCm3dUh3/0ujavsk/uq/JB9/SulWOhlDqVJhTfIIPQ8VW1vwRavRtQGyMbmwBj1HBq1ptl/gWwEuLcQkjcFR5QcSmBgDtSMnTgsDlXYeR/dx77T3dsf4zufEWP/IFi4QvBwQpPsDmPoTXNC8sfvHFfROrWKHkCfoR0n9K5xrvhNtJK1pkf6SQkn1HSp8it0jkHdCbB9r8GPwuudQOGG33znDl4rkkk+teIulqotrenobHlTHXdJIAic9qDAwmeCeJqpWDLYgspVqMN6DbFxU52jk+vP9+9dc0ZtLjA/iRg+3Q1yvw1fusMLVCC3PCxJ3yAdvUY/lXSfAN+q4aWpSQJ3DHMCIn6lVQtjbJn9X07j8ajcjBcO3PMtqYSeQDWUKutfDSi3snb19xP61lQjHe9QqyTnLVstZhAUogmQlO6BBzAExx96IWekvwJYdx//mvt1xVHSrwJUV7QZSdpIEgLG0lMjCokT60Z0nU0slQQxCSUqCVulwApaW2kp8oIPnUozOYiABXR0KV3PHMcoyE2q3J7TQ3FrSgtLSFKwotqwTwVdhJgnoM+lSWejuq3HYtBRBy2uCCoJVlIJkSDABkA9s20ai405KmHTC0q8yj+0WI2hTm3zpECEg9eTWytVcbC0m2cUoJGACEJShaFL5SBuJA3SZzxQrhQmqJ58H+ILZWG9jx7TLWxcMgtrjIPkMGeoxSCNHfC1IXbvbdxTuDKzwcK+X810nS2rx1wk2wQgBKBKkrALa07jsTAUtUESVCATzAFGj4ZUlXxXFLOIhKiViVbt0gSSSTKQYgJ/hFVdN0JS/YxD9eAZydlja260rdOxQ8yFJIKchPm6zUFqoIag4V2OD9qYvEumMtLUSSSolZClAxuO7I9Zn60pXJJMJCQPQE1TjwUNzE5erDNqAqEGtR2pAAJPXGPzWz9yFiS2J77hP4mgbjZjK4+lTWwQMBW4+xpnZEV9oYwv8cqSAkQekGfpxRfTLe5PDK1+0/0pWaYbURuVH0/SnXwro7O9J/xJScYMD9BXu2JhynmXFvPND9paPJ9Yn9Ky28TMcL+Ik+qf6E0a8VICRLd2okDhKh+YX+lc81O6MftSVCfmJk/f/mh7YuZ3LEdUa1bH5XR9ZT/APqK1f1Ex5TI7gzXNvjNlR2K2jpuzjpPepUKfbBWAY/ibP8ANNC+M+DUJXHtHtDS3MqwK8t7VEkYIpYt/FLykbCUqB6xtV/SiiNRtW2QUKcDmNyXOT6gjEVHlwOOIwODCKFpaUpQHTirWjXjdwhW9O0zFRtuWS7Mr+KPi7SfmEhXRO3tS5ZpuRkAhPf+tCurHzNonbiFPEOjfGhDLsQJMklPpxmaUGLd5haklWQSDtM+hzRtu7BdjeUqSPPtMEjsaEak6hBKxOTic571YrFhxGK7IunxKd5AwOTzQ11Ucc1Y+LuM1ElCgvdn+lMHzJ2+IweHtNaA+Pd4aGQjgrPb2orrPit99AQ0PgscJQ2Y4/iI5pRW244okblQOcmKYPD+mlSfNhKeZxJ9KT26t3N/HtDuyAokVlql98qXngkHncspAnn2rotn42YZaQ2fi3LvCl/D2J/P/NLtrbLMhuTAmEiQB0mtrBh97/1pCiJ+WIketIGYq1qPiNOFWFGdT0zUUvJ3JODx6dwfWo9Vs0uIUjqR+RwaQLHW12tztWCEqiewPf710Zp0OJCk881biyDPj0ZBufzHxIs2I4cmpOJya6tVSpEGc+vHINANWYQ4nAlWI95HHpzT74jX8G5J4G4KHqlYhX8zV/wroDD9m0XUAlClZGCfMTBjkZ4rmdJiyBynkftOn1OZe2GPBidZaEXbY+U7Q4CD1yADH1p38IW6bZKWColS5IkdAJiaOOstpSlIgJBEAQOOgHahniJ5LL1s5HVST6COR65pj48mJu5qFKRY+80fykwyjMO3p5v8htB17pzanFEjJJ/4/FeUSuUK3HancDkEHkHIrK5zBgSJQr7Df85wu1UM5IgCMnuqjml6bcOIU6laUNJwpxeY5/dSCTz0FZWV2ceJWJ1RGTKyClNQdea6yEhsb34MysBtG6IkJT5lRONxxJxmrWnXTkBRCUpxAAGfSBj71lZV2hUFASDWzHczo/hW7vFpCWylKf4lwVR/fpTYnTFFJ+I6tZ55hOP9PFZWU1RY3imNHaI2saSgFW1tPJ5yYk9+OKQNWQrdzAHbFZWUleY2BFpURHc96904EORWVlaeJq8y/bJ89M+hqAdB4H99qyspTRk88UXKNxMxP+mR/Wl9NykhQKQQB+T1rKyvLxMMhbsm3MAQZ6VVvNOfYJ+G7KTyAY57g4rKys1kGbpBFya1tlwD0T82RzUgvAMESPyPY1lZSwx1ykoBjE1baQXEk4k4jg+hp1f15LaNhHmAjjr7isrKDqcYLiZhdsmzGKnx9ylDgqO6R/I0I1K5JPoMCvaymoJmTgyGxe82atPOwaysrWHqi1PphXQ9RDc/6j259DRe+vU/DCkGAowUxwe4r2sqfIo1R6MdMcvDy2FWSm2wUlQKXCfmK4mZ7UH0VK2ErklPmEFJyCJyIrKyudkc2UlWFAdzLfixaC6ytSsLSAYTJKj1g8Yon4N1QtrNuudyTHcREiD7EVlZRYsrUr3v/wBgZMalCv8AeJL/AOQrZtTaXSYiWzAznKfsZ+9WdGuPhWjaE5I3A/7oKv0NZWU/rMjJk1LtY/iIwqGxUfB/mCmrt1bkqMkeuABUHiK7U682qfIBj68n++1ZWVyXyNpq+eZ0UxrrG3Ert62+2NgIhOB7VlZWUSsaG8I40vgT/9k=" alt="logo" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><a href="#" className="btn-wishlist"><i className="fa fa-heart" /></a></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Poorohit </Link></h2>
                                        <p className="vendor-address">Goa, SouthGoa</p>
                                    </div>
                                    {/* /.Vendor Content */}
                                    <div className="vendor-meta">
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="vendor-price">
                                                $150
                </span>
                                            <span className="vendor-text">Start From</span></div>
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="rating-star">
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rate-mute" />
                                            </span>
                                            <span className="rating-count vendor-text">(20)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="vendor-thumbnail">
                                    {/* Vendor thumbnail */}
                                    <div className="vendor-img">
                                        {/* Vendor img */}
                                        <Link to="/cat"><img src="https://www.creativechisel.com/wp-content/uploads/2016/09/wazwan-wedding.jpg" style={{height:"300px;"}} alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><a href="#" className="title">Kendra</a></h2>
                                        <p className="vendor-address">Baroda, Gujarat.</p>
                                    </div>
                                    {/* /.Vendor Content */}
                                    <div className="vendor-meta">
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="vendor-price">
                                                $150
                </span>
                                            <span className="vendor-text">Start From</span></div>
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="rating-star">
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rate-mute" />
                                            </span>
                                            <span className="rating-count vendor-text">(20)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="vendor-thumbnail">
                                    {/* Vendor thumbnail */}
                                    <div className="vendor-img">
                                        {/* Vendor img */}
                                        <Link to="/cat"><img src="https://www.weddingdoers.com/wiki/assets/admin/imgs/upload/article/Sunny_Dhiman_Photography.jpg" alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><Link to="/cat" className="btn-wishlist"><i className="fa fa-heart" /></Link></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><Link to="/cat" className="title">Tripathi</Link></h2>
                                        <p className="vendor-address">Baroda, Gujarat.</p>
                                    </div>
                                    {/* /.Vendor Content */}
                                    <div className="vendor-meta">
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="vendor-price">
                                                $150
                                         </span>
                                            <span className="vendor-text">Start From</span></div>
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="rating-star">
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rate-mute" />
                                            </span>
                                            <span className="rating-count vendor-text">(20)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="vendor-thumbnail">
                                    {/* Vendor thumbnail */}
                                    <div className="vendor-img">
                                        {/* Vendor img */}
                                        <a href="#"><img src="https://i0.wp.com/newslyindia.com/wp-content/uploads/2020/10/f46ef2d574cdb8d7cccdb39ef82ee0ab.jpg?ssl=1" alt="" className="img-fluid" /></a>
                                        <div className="wishlist-sign"><a href="#" className="btn-wishlist"><i className="fa fa-heart" /></a></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><a href="#" className="title">Singh </a></h2>
                                        <p className="vendor-address">Baroda, Gujarat.</p>
                                    </div>
                                    {/* /.Vendor Content */}
                                    <div className="vendor-meta">
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="vendor-price">
                                                $150
                </span>
                                            <span className="vendor-text">Start From</span></div>
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="rating-star">
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rate-mute" />
                                            </span>
                                            <span className="rating-count vendor-text">(20)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="vendor-thumbnail">
                                    {/* Vendor thumbnail */}
                                    <div className="vendor-img">
                                        {/* Vendor img */}
                                        <Link to="/cat"><img src="data:image/jpeg;base64,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" alt="" className="img-fluid" /></Link>
                                        <div className="wishlist-sign"><a href="#" className="btn-wishlist"><i className="fa fa-heart" /></a></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><a href="#" className="title">Soni </a></h2>
                                        <p className="vendor-address">Baroda, Gujarat.</p>
                                    </div>
                                    {/* /.Vendor Content */}
                                    <div className="vendor-meta">
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="vendor-price">
                                                $150
                </span>
                                            <span className="vendor-text">Start From</span></div>
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="rating-star">
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rate-mute" />
                                            </span>
                                            <span className="rating-count vendor-text">(20)</span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="vendor-thumbnail">
                                    {/* Vendor thumbnail */}
                                    <div className="vendor-img">
                                        {/* Vendor img */}
                                        <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPYqSk38mX7IHJn1OnauXfB8IJXjDmKY1d3A&usqp=CAU" alt="" className="img-fluid" /></a>
                                        <div className="wishlist-sign"><a href="#" className="btn-wishlist"><i className="fa fa-heart" /></a></div>
                                    </div>
                                    {/* /.Vendor img */}
                                    <div className="vendor-content">
                                        {/* Vendor Content */}
                                        <h2 className="vendor-title"><a href="#" className="title"> Priest </a></h2>
                                        <p className="vendor-address">Baroda, Gujarat.</p>
                                    </div>
                                    {/* /.Vendor Content */}
                                    <div className="vendor-meta">
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="vendor-price">
                                                $150
                </span>
                                            <span className="vendor-text">Start From</span></div>
                                        <div className="vendor-meta-item vendor-meta-item-bordered">
                                            <span className="rating-star">
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rated" />
                                                <i className="fa fa-star rate-mute" />
                                            </span>
                                            <span className="rating-count vendor-text">(20)</span></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </Fragment>
    )
}

export default Pandit