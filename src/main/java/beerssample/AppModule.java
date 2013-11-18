package beerssample;

import beerssample.persistence.UserRepository;
import com.google.common.base.Charsets;
import com.google.common.base.Optional;
import com.google.common.collect.ImmutableMap;
import org.joda.time.Duration;
import restx.SignatureKey;
import restx.factory.Module;
import restx.factory.Provides;
import restx.security.BasicPrincipalAuthenticator;
import restx.security.RestxPrincipal;
import restx.security.RestxSession;

import javax.inject.Named;

@Module
public class AppModule {
    @Provides
    public SignatureKey signatureKey() {
        return new SignatureKey("731000985644504066 restx-samples-beersample restx-samples-beersample 60bcd863-ea38-4408-b9ba-c41a169cfba6".getBytes(Charsets.UTF_8));
    }

    @Provides
    @Named("restx.admin.password")
    public String restxAdminPassword() {
        return "juma";
    }

    @Provides
    @Named("app.name")
    public String appName() {
        return "restx-samples-beersample";
    }

    @Provides
    public BasicPrincipalAuthenticator basicPrincipalAuthenticator(final UserRepository userRepository) {
        return new BasicPrincipalAuthenticator() {
            @Override
            public Optional<? extends RestxPrincipal> findByName(String name) {
                return userRepository.findUserByName(name);
            }

            @Override
            public Optional<? extends RestxPrincipal> authenticate(String name, String passwordHash, ImmutableMap<String, ?> principalData) {
                boolean rememberMe = Boolean.valueOf((String) principalData.get("rememberMe"));
                Optional<? extends RestxPrincipal> user = userRepository.findUserByNameAndPasswordHash(name, passwordHash);
                if (user.isPresent()) {
                    RestxSession.current().expires(rememberMe ? Duration.standardDays(30) : Duration.ZERO);
                }

                return user;
            }
        };
    }
}
