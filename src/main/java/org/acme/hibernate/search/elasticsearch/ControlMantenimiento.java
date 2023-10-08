package org.acme.hibernate.search.elasticsearch;

import jakarta.inject.Inject;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;


import io.quarkus.qute.Template;
import io.quarkus.security.Authenticated;
import io.quarkus.security.identity.SecurityIdentity;


@Path("/controlmantenimiento")
@Authenticated
public class ControlMantenimiento {

    @Inject
    Template page;
    
    @Inject
    Template forbidden;

    @Inject
    SecurityIdentity identity;

    

    @GET
    @Produces(MediaType.TEXT_HTML)
    public String get() {
        if (identity.hasRole("admin")||identity.hasRole("user")) {
            return page.data("identity", identity).render();
        } 
        else {
            return forbidden.data("identity", identity).render();
        }
    }
}