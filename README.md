    wget -m http://fxhistoricaldata.com/
    # Site was originally http, but github pages serves over https. Make external scripts protocol agnostic so that they load correctly.
    sed -i'' 's/http://' index.html instruments/*
