package beerssample;

import com.google.common.base.Optional;
import restx.server.JettyWebServer;
import restx.server.WebServer;

/**
 * User: xavierhanin
 * Date: 4/1/13
 * Time: 5:10 PM
 */
public class AppServer {
    public static final String WEB_INF_LOCATION = "src/main/webapp/WEB-INF/web.xml";
    public static final String WEB_APP_LOCATION = "src/main/webapp";

    public static void main(String[] args) throws Exception {
        int port = Integer.valueOf(Optional.fromNullable(System.getenv("PORT")).or("8086"));
        WebServer server = new JettyWebServer(WEB_INF_LOCATION, WEB_APP_LOCATION, port, "0.0.0.0");
        System.setProperty("restx.baseUri", server.baseUrl() + "/api");
        server.startAndAwait();
    }
}
