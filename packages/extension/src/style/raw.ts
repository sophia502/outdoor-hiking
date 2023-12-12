/* eslint-disable */

/**
 * Auto generated file, do not modify it!
 */

export const content = `/* Control 插件样式 */
.lf-control {
  position: absolute;
  top: 0;
  right: 10px;
  display: flex;
  margin: 5px;
  padding: 0 15px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}
.lf-control .lf-control-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  cursor: pointer;
}
.lf-control .lf-control-item:hover {
  background: #efefef;
}
.lf-control .lf-control-item.disabled {
  filter: opacity(0.5);
  pointer-events: none;
  /* cursor: not-allowed; */
}
.lf-control .lf-control-item.disabled:hover {
  background: #fff;
}
.lf-control .lf-control-item.disabled i {
  pointer-events: none;
}
.lf-control .lf-control-item i {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  background-size: cover;
}
.lf-control .lf-control-text {
  margin-top: 5px;
  font-size: 12px;
}
.lf-control .lf-control-zoomOut {
  background-image: url("data:image/png;base64,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");
}
.lf-control .lf-control-zoomIn {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAADFlJREFUeF7tnQfMbUURx/9YYsSKkoi9JooVSxQs2EVsiAW7orHHih2xRU00NrB3sKFYsIstKqioYCxYMPaCXVGMvefn20vO+/zu3TKz5+y5dyc5uV/e252dmf2f3bO7M7O7qNNGW2CXjda+K68OgA0HQQdAB8CGW2DD1e8jQAfAhltgw9XvI0AHwKwtsKuk64XnnJJ4+Lfh79kl/Xnw/GXw95cknSjpV7O2gkH4uY0AF5O0T3j2Dr8G9c+s+hVJJ0g6WdIXJX3Lg+kceMwBAJeTtP/gGcOuAOGj4QEYa0utAmCKTl/WyV8PQPhI+F0rMLQGADr+EZIe3qiVvyDpJZLe0qh82WK1AoALhE6n8/m7dTouAIHfWVMLAOBtp+N5++dGjASMCIwMs6QpAXCP8NZfZ5aW21loQPBiSd+dmy5TAOCakp4ZvurnZq9V8p4eRoOnz0mpsQFwa0mvlnSRORkpU9Y3SDo4s85kxccEwP0lvWYyTcdt+HhJt5H0x3GbzW9tLAAcFob9fAnnW+NHYZo7tWUVxgDA+8Pb0LIdasq2X8sbSDUBsLukb0varaZ1Z8Kb6e91LcpaCwCc0H2mRYUnlOkZkppbIdQAAG/+ryc0dMtN304SU2IzVAMAv5B0oRE15Cz/XZK+I+k3kn4bfhd/4wsAKC+45Zd/u0l4RhRXV5N0ypgNrmrLGwAsf/YdQTm+sDmuPVbSh43t7SGJ/YkDJN3WyCu1On4NP00tXLOcJwDY4HlATWElvVbSeyR9sFI7lw4rFj7arlqpDdjigIJjy18rtpHE2gsAh0h6QVKLZYV409lv/1RZ9exauJQtDqkuml07rcLRkjgPmZQ8AMDw+YFKWtDhdDwAmILo/IV/AqDwJnSD/2RkBQAGopO8j3L5sHtyGPInM86gYaaDJ0i6ewVhJl0eWgHwbEmHOhvlE5IeKQlXrNbouZIe7ywUS2aOxH/gzDeJnQUAlw+OEOdLaimt0ORDYoKYNQ61ni/pcQltuxexAOAI5/nrQeGoOEfJG0n6ZE6FbcqW2IB9Dr7kWUJ6ELEK155i1CtRHoWvIekkSWf10F7SrSSV+NdNBYCF2oCAjR0PeqWkh3gwyuFRCgAONu6X09CKshbFpwbAWST9TdLZnGzB3sDnnXglsSkBADt97Ph5ECuIGxsYTQ0ARMfFjWgiD3qzpHt5MErlUQKAYyQdlNrAinLfk7SX0WumBQCgIjug7IR60M0lfdyDUQqPXAAwV3tswzJs4jJlVbQVAGDrlzvN4Wx1H5jSeR5lcgHwJkn3dGj4iZJYU1upJQCwMmD+vpRVKUk3GMufIgcArPe/7xC5g5FwGPm3g6FaAgDqeJ2JvFDSYxzsE2WRAwDmfeZ/K90pnN9b+VC/NQCQiwCAs0y2EC/aFcMKw8InWjcHAB5LP++v3NYAgMGJCTgyavl4gbs6vXArW0oFACdh7FmfKy730hJ/CkP/Vw08tlZtEQDI+DFJNzPqyWgLCKpSKgBuL+ndRklqnHq1CgA8i95ntBcrJaYBpoNqlAoAhm6r80KNL9tWAUCH0XF4GFnoPpLeaGEQq5sCAPb7cV2ybHdy1HmZmDAF/98yANji5oDLQi8KKwsLD/M3AF/t7zBK8ApJDzXy2K56ywDw8JTipBPP5WqUMgJ4OEHwDfHeClq0DADU/bnxyPh3Dvsu5hHAY/l3nhV7/v+pAIwxWa56iTymgStJ+mYthVJGAN5cIlpKKXbit84A8Bih2HqvlpQqBQDE+LF1W0qcH9x7ReV1BsCVJX2t1HChHtlUnmrksbR6CgDImon/XynhOEp+gGW0zgC4sKSflRou1CPe4rFGHiYAsANIHF0pPVjSqzYUAJwN/L3UcKFerRXU/9injADWN5Tl0Ic2FACo/XtJFs/poyTd1wii4hHAI9T7KhFvVyvAatkmlW/sJcLzybIJ9nZJd0kVJrdcTHjmfmvm7PNLOmODRwCSSOLyXUqE3VWLWo4BwCPTRweADQBESt20FD2xejEAXF0SlypYqE8BtimAjCKWfZiVfRcDwMUl/djS+yH5Qv8ILDcip4GcClahGAC4fgVHDgv1ZaDFehIheI+ysVheOwYAagIAgFBKfSOo1HI76tVwpDlTohQAMAUwFZRS3woutdyOeoTKk4m8CqUAgI9APgZLqR8GlVpuRz3OUXiJqlAKAMjGRbiShfpxcLn12AOolYInaSv4rQ7eqd0hpBwAjL6EoVehlBGArB0PM7Ze60DD47w9xQYl6nu4hDXhEUR+26eVWGBQpzuFlhmQQFyCaKtRCvrxTf+GgwTdLTzfiF5BtEtbTgEAlcnYhW+ahWqsZ1udAjwCQ7D1dSV9zmL0WN1UAHhMAz00LNYbO/8/HsXV71ZKBcC1wsXKeSr8f+keHJpuwXdKunN68bKSqQDwmgbg08PD0/qKXMUvTStaXioHAF5ZQXuCiHh/cdvYnpJOixe1lcgBgMcH10Jar69bD5lybLDK2p4pYrynSvMqYMGACBWQaaWeJGq1BZn7+QaoTrno90wP29PEbd+93D/MS/bP6r2f6BY+lIO06czhXrnzYyeFMRu0MAV4JopE31ETR+eOAAjoES087NieKnZnmNfYMXX7BoARl0Tg6ux5lUpPFr2ji0ZZ+w/RUDICUJ9LEzwSPQ5l4TYOjp5zaKopgGwpfMNcIkfYSFlSxpNY6kRHnlFWpQDgG4BvAe+btQDW86JST1sA0OGqfW5nMao6fy6TtRQA8KtxcwZ8CSTFD46lYmuEhzO+Dd7EaSvHvj/0ZhzjZwEAvMlhwxvhTfAlJNoalOIpF5dYPcuT4YBXVcfPVTJbAXAHx7SvW+X8R7gyDo+k0d+MgTAEZrIvb0mSsaoPmE44H7GGkRdh0woAGvVwGVsl/C8HQPhDkZZllfgg406/aoGZQSy8pe4o6ctlYtpqeQAACTw8h2OanBqAQD59zsprEVe4MdeT83csAthkE+Gi61HJCwDkEWC+tgSQpCrOx+EJ4doa3KWtuYfPEZZfRODewsHzKVWPreWYApBlVPICAEJ7hJKXKE9KVoJPOaj6SXiIZsKjdkhc8MS6HZAuftl128/x9rMS+Yd1kPuSViY59T0BQLvcJEZewRaIM3UMyvBKp3vuXNbUj13WvWs2MOTtDQB4e58VjGWLltqxHpIl61IDADRuTS6ZrMAaFxwFBLUAQL9wjRrXqXUqt0B1ENQEAGp7XZ9SbsL516wKgtoAwPzXl/Tp+ffDpBpUA8EYAMBylw0XIOE906nMAlVAMBYAUJkLpzjps149U2a+9ahFmBjhYm40JgAWQuPzNsqliG5WaosR2cfd/DCmAADm5BSRE7YaR8lTdBd7+ItbQy1X66XKzu4n06qZpgLAQnCcSgCCG6LNFsln8HpJD5T0r1CVaJ4xdh05Jd0jX9yda0wNAKTBvQwQcPQ6huGsNlvU5/yBcLntfPjw8CGvQm0i4trkmtYCABZGovMBAWDwijuo0QEnh6DN2H1+AGOfGgJsw7O4H4srVlSM6YAhlcRSrYwIXJpxbHjwfUil4yTdMrWwoRz7LPuW1G8RAAs9SC13YAACv1MQnb3oeEBQQm+rme9/INDhkh6dK2DLABjqcoUABjxn9zKmrl1lI1LhcByLe9ZJTkkxaI/9D0a12oTT6lNyGpkLAIY6kbeY3Hlbn1S9+XA6PTiM8PvZ8CFHp9d0NRvrmJyNtqNTjTFHACzTjQ9HwLH1F08gvIMWnT5lvMGhYeWQ2j8l5ViGktk16aaXdQJAibGmqEMMAPN1TeLq+gNSGugASLGSf5laEUZDSZPS8nUA+HduKsfa/pNMAdFsLh0Aqd1Vpxz3AldLBR/uGiLyaCl1ANTp2ByuBwVfiZw6qWWPiWV67wBINWXdcnywEfHkTdw6zijTRwBvy1bgt3/kit2SJqMfgn0EKDFrvTqEp7H1fF6nJu4mia3oPgI4GXQMNjjRspNnjbNkW/uGYQOsA2CMnnNsg7uGAYHF6yf69iNvnwIce82ZFYdegCC6lt+m3SNDnGZUpA6AqIkmLUCk8GEhH1OqIC/LueOpAyDVrNOWY68AIHAR9yp6kqTn5IjaAZBjrWnL7iaJeZ3UNTw4zECnBP8FnFeSj4EXqnQATNupltZxqceH4QwLkw4Ai/XWoG4HwBp0okWFDgCL9dagbgfAGnSiRYUOAIv11qBuB8AadKJFhQ4Ai/XWoO5/AS5QA58CED5rAAAAAElFTkSuQmCC");
}
.lf-control .lf-control-fit {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAABrlJREFUeF7tnU3MXVMUhp+OW0JSJiJhZEAQBigSBsWEMGDWDjDy04ZqJyQ0YdIqaf2MMGhnDAgT2gEJigFBGBiRiAlNCO2YrOY039fv3k/XOmvvc869+z3Jzdeka+2fZ733vefss8+9G9DRNIENTc9ek0cCaFwEEoAE0DiBxqcvB5AAGifQ+PTlABJA4wQan74cQAJonEDj05cDSACNE2h8+nIACaBxAo1PXw4gAVQjsBW4ontdC9hrU6K3T4DbE/lDpn4M3Jbo8CTwbff6CbDXsUR766bWcoB9wO7CA25JAPPQ7Qf2FGZaZT/A58CW0gMFWheAIT0O3FySbWkH+Lfk4Na0JQGsAClWt2INAYeBbRLAaQLZc4BzYTwCbD9XkOf/SwlgB3DQ02EiRg5wNrydwKEEz9OpJQRgZ/tHswNx5EsAs5DuyF4dlBDAE8BLjgJmQySAWYJPAi9nwJYQwJvAg5lBOHMlgFlQbwEPOfnNDSshgC+BGzKDcOZKALOgvgJudPKrJgBbtdrYYxB/AL8CfwdyF2kl0Dut84FLgYu8CaviTiVXV4ucBPa59n8KONBjwsucsgt4sccEUy6eSu4GGxVAiT57cFqYlEF5lihGZMAPAO8sTCnGGej9wNuBrlM1TCUHHeBEz8+5AIulCbXzo83O2aRqmEoOCuC77pawc15Nh9mt4GucBFI1TCUHBbBIl3FO9tXCIvcSUjVMJUsAEoAR8J4EygH8epED+FktZaQEsJRl9U9KAljFym55Xt1thbrAz3DUyL8A2xr3fc9b5RJAV77ngGdHLWW+872AzSNySABAdEUsAnjo2OgKaPMCuBP4cOgqVe7vLuAjZx/NC2AZrH9trSMfBQslABus9/Dez38fuNvb6ILEfQDc4xxrDaZzuy6xEuicUygs8g4INTxi8CQXwiSA4RQhAQRYywECsDKhcoAMvViuHCDASw4QgJUJXQYHsHeWbTOzl+2kGeKwHby2UGUv7/cAyAEClYk4wAvAM4G2S4Y+DzztbFACcIKysIgALgd+CbRdMvQy4GdngxKAE1RUAGN/jC30hpix4a2niYgDjD0HCSDwzvaGSgBeUsm4sd89coBkAbPpEkCW4IJvipUAJIA8gQot6BygAtR5TcoB8qB1FZBnONOCHKACVDlAHahygApc5QAVoMoB6kCVA1TgKgeoAFUOUAeqHKACVzlABahygDpQ5QAVuMoBKkCVA9SBKgeowFUOUAGqHKAOVDlABa5ygApQ5QB1oMoBKnCVA1SAKgeoA1UOUIGrHKACVDlAHahygApcIw5w8YAPha6dqj0k+rtz/no0zAnKwiICeBR4PdB2ydBHgNecDUoATlBRARhY+1bONwZ8SNQeCn24+/ZSPR4eKKw3NOIA3jbHjpMDBCogAQRgZUKX4bmAzPyHzJUDBGjLAQKwMqFygAy9WO7SOkCNrzV9F7g3xnfy0e8B9zlHWYPp3K5LOECNlTD7adn9TliLErY78NOwkY/AVA1TyR35GgKwXwnxfrX6ogjAvgL/qHOwzQvAOC3TV8ZHvio+uhCWehOnkis6wJk3yjL8akj010IkgDU2adZ5E3AdcJ7TQscO+wf4Bvii50eZPgLGruDI/UsAIxdg7O4lgLErMHL/EsDIBRi7ewlg7AqM3P9SCsDOiq8fGeyidP91d9XjGW/qUj6VHFwHsB9zsP17Os5NwPYZ2n5Dz5GqYSo5KAALtzX+A55ZNRyzK3DPwDClaphK7iGA9IAbEIb33soZFKkappJ7CsDS+iyPLnvt+y57p2qYSu4qYsuem3pU5wTwG/BnINf707OBJquERu7nXwhcAmzuMZKT2eXxEgL4FLilx+CjKZPcUbPOJCKXcVEOq+M/A27NNFBCAK8Aj2UG4cyVAGZBvQo87uQ3N6yEAKz4JoLahwQwS9iKbyLofZQQwNbATpfeAwUkgFl6tnPqWAZqCQFY//sA2/NW85AAzqZreyb3ZIGXEoCNw57P25Id0P/kSwArcI53zyWmcZcUgA0muogRmYAEsEKrWN2KNbSqkoeBbZHKOmMlADgCbHfycoXVEIB1vAM46BqBP6h1AewEDvlx+SJrCcB6t6uDq7rXld3fjb5hzY1qSQCngB+AH7u/9u/U2f563GsKIFFrpQ5FQAIYivRE+5EAJlqYoYYlAQxFeqL9SAATLcxQw5IAhiI90X4kgIkWZqhhSQBDkZ5oPxLARAsz1LAkgKFIT7QfCWCihRlqWBLAUKQn2o8EMNHCDDUsCWAo0hPtRwKYaGGGGpYEMBTpifbzH3ZmWJBn8wK1AAAAAElFTkSuQmCC");
}
.lf-control .lf-control-undo {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACjBJREFUeF7tnXesbUUVhz+CigX1D7sECBEMqAHsBQhNRIwIVqoiVlRUiCCEkNCxQBQeYhcVLKihiFGDJRgRLASjUiwQRRJq1CiSACGU/GDv5N777jlnyprZc85eKzm5L3kza1b5zt77zJ5Zsw4uo47AOqP23p3HARg5BA6AAzDyCIzcfb8COAAjj8DI3W/tCrAHcAiwNXAD8B3g4yPPUVH3WwFgT+Ao4MWreHsAcHbRKIxYeQsAnNQlf1IargGeN+IcFXV9aAC+BLwrwMNnArcEtPMmkREYCoDnA58Adgm0d0fgF4FtvVlEBIYA4EDgk8CTI+x0ACKCFdO0JgCP7hL/wRgDu7YOQELQQrrUAuDl3SV/uxCjVmnjACQGbla3GgDoIe/TwPqzjJny/w5ARvCmdS0NgB70PmpguwNgEMTVVJQCYANgDfAGI7sdAKNArlRTAoAdgNOBLQ1tdgAMg7lUlTUAut/rm/8YY3sdAOOA9uosAfgYcGQhOx2AQoG1AOCJwGeBfQvZKLXHFdJ9M/B74CrgnkJjNK02FwDd588Etm3ayzDjrgX+2H3+DOhzXVjX+W2VA4Ce8HW/1xP/osrtwNUdDL8EzgPuWyRnUwHQb3v9xh+b/LWDQCDo1jH3kgKAfuJ9aO49z3fgR0tg+F++umE0xAKgJVpvGcbUZke9aQkIuk3MlcQAcAmgSR6XyRE4FzgVuHJeghQKwEXA7vPi1MB23t1BcApwx8C2zBw+BIBjgWNmavIGKyOguQVdDZpe0BoCwPXAszy/yRG4ANDV4NfJGgp2DAHgTuBxBW0Yg+r7u6vB0cC9LTkcAsDvJqzXb8mPebHlJ4D2OdzaisEhAIx10qdUjvRssDegqefBJQQAGfn+bs5/cIMXxIB/A68HLh3an1AAZOcLgR8DTxna6AUaXxBcOKQ/MQDIzmcAX/A5AdOUaRHNV0w1RiiLBaBXrbeAKev7I0wbVdMjuj0T1Z1OBUCGCgCB4GITgbcC37BRFa4lBwCNslsHwabhQ3rLKRHYDNDEWzXJBUCGKvm6EgiGUlJiSdhjgc2BLTofStkeo/f/wJNqThZZAFDjuaD0olCtaxQI+rwI2KtLREzyrNpqscmbrJTN0mMJgMZ6B3ACoP38llIagJW2Pr2DQGsfXmHpSKAuTRmrcEZxsQZABuuyKggsKa4NwNLAv7qD4e3Fs7F8gCoPhSUA6N04tAPB4kXSkAD0/mgxjHx6XSUQtPhUfhedLSwJgOL00g6C0Eogk2LbAgC9bft3ILygAghaePqykg+FpQHoY5S7qKQlAOTTeh0EJwLrFgbhI8CnSo1RCwDZ/xrgZGCrBGdaA6B3QXUNzwEen+BTaBfVS9RV4LbQDjHtagIgu1QXSBC8O8bI7l7YapEo1Tb8AfC0SJ9imusXgX4ZmEttAHoHBIBACC0U1eoVoPfnEcDfgE3MM/SwQi0u1VVA29VMZSgA5IRuBZ8DVD9olrQOQG//ZQXnDRQrrcswlSEBkCOa9tTr5TfO8Eozdc0vse580HRuTj2kaaHQJlxBZiZDA9A78lrgPRPWGZwfAIhZQAwUqaytln2VEO3M0nIyM2kFgN4hTbboNXNfW0jbtV8J/MvM4zqKNGv41UJD6deUVmaZSGsAmDjViJLPAB8oYIs256qkvok4ACZhXFWJXihpSf2GxkP8pXtraaLWATAJ40Qlqpmk2knWsj1gshPZAbBOzXJ9TwCuAJ5tPIyKbWsdYbY4ANkhnKngw8BpM1vFNdDDsY7VyRYHIDuEMxU8snsWMEnYktGeYzEz6ADMzJ9JgxJXAT1fZNdpcgBM8jtTib6tOvvIUi4HtslV6ADkRjC8f4n3BI/KXSziAIQnMLelqqxoYYylZB+m5QBYpmO6rhK3AVVqzXrv4ADUA0Ajqerocw2H3AlQ9bZkcQCSQ5fU8dvGb/O0geW7SZZ0nRyAnOjF97Uuqa+XTarUniwOQHLokjoe1K2CSuq8Sic9WB6fo8wByIlefF/tMjJ7lw+ckVu32QGIT2JOD22bs1zYqWeKrIM6HICcdMb31empd8V3m9jjp8CrcvQ5ADnRi++rvQOWNQJVw1mbU5LFAUgOXVLHlwC/Teq5eqezgHfm6HMAcqIX31db5r8X321ij+yFIQ6AYTYCVGmjpyqIW0l2dTEHwCoVYXqsj9vR5V+3gWRxAJJDl9RRVUGzHtpWjCpdehBMFgcgOXRJHfULwHIXcfZWMQcgKY9JnbR651dJPSd30sSSjrJLFgcgOXTRHfXwp4dAS1Hh7qxtcw6AZTqm6/p7gfoB2fnLVlAvfnM9kja4atrWUkwKSjoAlimZrEsbQ7Q03FL2A76Vq9AByI3g7P46cU0nhlkftKHiGv+ZPfz0Fg5AbgRn9z+zQGmXHwIqqpEtDkB2CKcqUMGLrEWbE7S/D/i8hekOgEUUJ+v4fqHSstptfJ2F6Q6ARRRX16GSsioiaS26omg5uIk4ACZhXEuJvqEqbmW5B6AfxLSUvANQBoBSp63q2FkVjFQRaRNxAEzCuEyJStqqhEsJUdFo0+lkB8A2TVryraXfJUTFovXtV/FoM3EAzEL50BHxh9mpW0uT6b2/1+4A2GTsa92p4Dba1taivQT69puXy3UA8lKmGoAXdOcq52ma3ltFolUs2lwcgPSQ6uwg7czV6SElRZVFtPKniDgA8WF9aje3r42ZNUTFoVUkuog4AOFh1bEwuhRrHn7j8G5ZLXV76QtnZyma1NkBmB1WnQbSJ15r8GqJ5vp3Bf5RckAHYHJ0VdNHK3kOtKrKGZnI7CXfIeM5AMujpKTruNidSz54BSSmyG/+1cYdGwA6MVwraXRYlT79v/X3zYVe3gTke1mTc4F9Yjultm8JAG2Y0OFQus/qLZpq6+po+jGJqonqyJlq0gIA+laq2NHBwEbVPG9zoOr5qD7giriraJKSX5X6NnP/0DF6f6pt25AAWG+Vrh07y/Gyt3ilGjMUADo59IupRi9QP23r0vPO7UP5NAQAqm6pJ92xi+b4dzEuGhUd0yEAuHTg39jRQSrQQa+PNcE0uNQGoMQeucGDGGlAdnHHyPGmNq8NgEqafNnSgTnTpVrBR7Vkc20AdGBCrdeoLcX5N4AWdFpWCDPxrzYAbwO+bmL5fCi5uUu8kv9AiybXBkAvWX7WYiAK2LSmS/4/C+g2U1kbABm+6L8CVAlM33j52bwMAYCWOKnK9aKJjohVHcBvzpNjQwCg+LzXanvzwMFWgQaVatHn4oFtSRp+KABk7OGAat3Oo2iHbp94y+rf1WMxJAByVmvtDgE2q+55/IA3Lkm6pnEXQoYGQEHUahxBoM/6jUT1buDaFZ+fA3c2Yp+ZGS0A0DujNQGaJ9BffbTrpoZo1a1W4uhMv6V/tRV74aUlAFYGW1W1ShRYWDrOH4D/LnyWpzjYMgBjzks13x2AaqFucyAHoM28VLPKAagW6jYHcgDazEs1qx4EiV4/kCu3ExsAAAAASUVORK5CYII=");
}
.lf-control .lf-control-redo {
  background-image: url("data:image/png;base64,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");
}
/* Menu 插件样式 */
.lf-menu {
  position: absolute;
  z-index: 999;
  display: none;
  width: 150px;
  margin: 0;
  padding: 10px 0;
  background: #fff;
  border: 1px solid #efefee;
  border-radius: 8px;
}
.lf-menu > li {
  position: relative;
  padding: 3px 12px;
  font-size: 12px;
  line-height: 18px;
  list-style: none;
  cursor: pointer;
  transition: all 120ms ease-in-out;
}
.lf-menu .lf-menu-item:hover {
  background: #f3f3f3;
}
.lf-menu .lf-menu-item__disabled {
  color: #aaa;
  cursor: default;
  opacity: 0.88;
  pointer-events: none;
}
/* DndPanel 插件样式 */
.lf-dnd-panel {
  position: absolute;
  margin: 5px;
  padding: 15px 5px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}
.lf-dnd-panel .lf-dnd-item {
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
}
.lf-dnd-panel .lf-dnd-shape {
  width: 36px;
  height: 36px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  cursor: grab;
  opacity: 0.99;
}
`
